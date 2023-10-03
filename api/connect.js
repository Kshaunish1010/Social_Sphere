import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "abstract-programmer",
  password: "DellByte@48",
  database: "Social_media",
});
