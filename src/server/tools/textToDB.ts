import {resolve} from "node:path"
import {readFile} from "node:fs/promises"
import sqlite3 from "sqlite3"
import dayjs from "dayjs";
import {DataTypes, Sequelize} from "sequelize";

/**
 * @description 数据库类型
 * @type {string}
 */
const databaseType: 'sqlite3' | 'mysql' = 'sqlite3'
/**
 * @description 目标文件的路径
 * @type {string}
 */
const file = resolve("resources/identityCard.txt")
/**
 * @description 数据库文件位置
 * @type {string}
 */
const DB = resolve("identityCard.sqlite")

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
    // 最大连接时间
    acquire: 600000000
  }
})

const idc = sequelize.define('identityCards', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  number: DataTypes.STRING,
})


if (databaseType === "sqlite3") {
  sqliteTransformer(file, DB, '----')
} else if (databaseType === "mysql") {
  mysqlTransformer(file, '----')
}

/**
 * @description sqlite3 转换器
 * @param {string} file 文件路径
 * @param {string} DB 数据库文件路径
 * @param {string} single 分隔符
 */
function sqliteTransformer(file: string, DB: string, single: string) {

  const sqlite = sqlite3.verbose()
  const db = new sqlite.Database(DB)

  db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS identityCard (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, number TEXT, append_time TEXT)")
  })


  readFile(file, {encoding: "utf-8"}).then((data) => {
    /**
     * @description 当前添加数据的时间
     * @type {string}
     */
    const appendTime = dayjs().format('YYYY-MM-DD-dddd HH:mm:ss')
    const lines = data.split("\n");
    lines.forEach(async line => {
      const res = line.split(single);
      // 移除分割中产生的 数据错误 项
      if (res[0] === undefined || res[1] === undefined) return
      db.run(`INSERT INTO identityCard (name, number, append_time) VALUES ('${res[0]}', '${res[1]}', '${appendTime}')`)
    })
  })

  // db.close()
}


/**
 * @description mysql 转换器
 * @param {string} file 文件路径
 * @param {string} single 分隔符
 */
function mysqlTransformer(file: string, single: string) {

  idc.sync({force: true}).then(() => {
    readFile(file, {encoding: "utf-8"}).then((data) => {
      const lines = data.split("\n");

      lines.forEach(async line => {
        const res = line.split(single);
        // 移除分割中产生的 数据错误 项
        if (res[0] === undefined || res[1] === undefined) return

        await idc.create({
          name: res[0],
          number: res[1],
        })
      })
    })
  })

}
