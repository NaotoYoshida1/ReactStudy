// const express = require('express');
// const app = express();

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

// app.listen(3001, () => {
//     console.log('running on port 3001');
// });


const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test_db',
  });

app.use(cors());

app.get("/api/get/test", (req, res) => {
    const sqlSelect = "SELECT * FROM test_table ORDER BY id;";
    db.query(sqlSelect, (err, result) => {
        console.log("疎通確認");
        res.send(result);
    });
});
app.get("/", (req, res) => {
    // res.send("hello world");
    const sqlSelect = "SELECT * FROM test_table ORDER BY id;";
    console.log("log情報：" + sqlSelect);
    db.query(sqlSelect, (err, result) => {
        console.log("エラー内容" + err);
        console.log("疎通確認");
        res.send(result);
        console.log(result);
    });
});
app.listen(3001, () => {
    console.log('running on port 3001');
});