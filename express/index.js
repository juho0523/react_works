import express from 'express'
import mysql from 'mysql2'
const app = express();
const PORT = 8000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'jsuser',
  password: 'JsUser_2026!',
  database: 'jsdb'
});

// MySQL 연결 확인
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL에 연결되었습니다.');
});


app.get("/api/products", (req,res) => {
    const products = [
        {id:1, name: "무선 마우스", price: 30000},
        {id:2, name: "유선 마우스", price: 10000},
        {id:3, name: "무선 키보드", price: 540000},
        {id:4, name: "유선 키보드", price: 40000},
    ]
    res.json(products)
})


app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.url}`)
    next()
})

app.get("/api/products/:id", (req,res) => {
    const productId = req.params.id;
    const sql = "select * from product where id = ?"
    db.qu
})


app.post("/api/products", (req,res) => {
    console.log(req.body)
    res.send('상품 등록됨')
})

app.get('/', (req, res) => {
    res.send("hello expasdredasdss")
})

app.listen(PORT, () => {
    console.log(`서버 실행중 http://localhost:${PORT}`);
})