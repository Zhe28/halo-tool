import {resolve} from "node:path"
import {readFile} from "node:fs/promises"
import sqlite3 from "sqlite3"
import dayjs from "dayjs";

/**
 * @description 数据库类型
 * @type {string}
 */
const databaseType = 'sqlite3'
/**
 * @description 目标文件的路径
 * @type {string}
 */
const file = resolve("src/server/resources/identityCard.txt")
/**
 * @description 数据库文件位置
 * @type {string}
 */
const DB = resolve("src/server/identityCard.sqlite")

switch (databaseType) {
  case "sqlite3":
    sqliteTransformer(file, DB, '----')
    break
}

/**
 * @description sqlite3 转换器
 * @param {string} file 文件路径
 * @param {string} DB 数据库文件路径
 * @param {string} single 分隔符
 */
function sqliteTransformer(file, DB, single) {

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
