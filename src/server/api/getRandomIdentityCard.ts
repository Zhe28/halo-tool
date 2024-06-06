import {DataTypes, Sequelize} from "sequelize";
import koa from "koa";

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  dialect: 'mysql',
  logging: true,
  pool: {
    // 连接池中最大的连接数
    max: 5,
    // 连接池中最小的连接数
    min: 0,
    // 连接池中连接的最大空闲时间
    idle: 1000,
    acquire: 10000
  }
})

/**
 * @description 随机获取一个身份证信息
 * @returns {Promise<Model>}
 */
async function getRandomIdentityCard(context: koa.Context) {
  const identityCard = sequelize.define("identityCard", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    number: DataTypes.STRING,
  }, {
    tableName: 'identityCard',
  })

  // 检测数据库是否初始化
  const isInit = true;
  if (!isInit) {
    await identityCard.sync({alter: true})
  }

  const count = await identityCard.count()
  if (count === 0) return null

  const res = await identityCard.findOne({
    where: {
      id: Math.floor(Math.random() * count)
    }
  })

  context.response.body = res
  return res;
}


export {getRandomIdentityCard, sequelize}
