import {DataTypes, Sequelize} from "sequelize";

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  dialect: 'mysql',
  logging: true,
  pool: {
    // 连接池中最大的连接数
    max: 1,
    // 连接池中最小的连接数
    min: 0,
    // 连接池中连接的最大空闲时间
    idle: 1000,
    acquire: 10000
  }
})

async function getRandomIdentityCard() {
  const identityCard = sequelize.define("identityCard", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    number: DataTypes.STRING,
  },{
    tableName:'identityCard',
  })

  // 检测数据库是否初始化
  const isInit = true;
  if (!isInit) {
    await identityCard.sync({alter: true})
  }

  const {rows, count} = await identityCard.findAndCountAll()

  // 随机获取一个身份证信息
  const randomIndex = Math.floor(Math.random() * count)
  console.log(rows[randomIndex])
  return rows[randomIndex]
}


export {getRandomIdentityCard, sequelize}