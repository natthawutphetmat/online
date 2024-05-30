import mysql from "mysql2/promise"; // นำเข้า mysql2 เป็นรูปแบบ promise

// ปรับเปลี่ยนเป็นการใช้ Pooling connection
async function connectToDatabase() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  return pool;
}

export default async function handler(req, res) {
  // เชื่อมต่อกับฐานข้อมูล
  const pool = await connectToDatabase();

  // ทดลอง query ข้อมูลจากฐานข้อมูล
  try {
    const [rows, fields] = await pool.execute("SELECT * FROM images");
    console.log(rows); 
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error querying database:", error);
    res.status(500).json({ error: "Error querying database" });
  }
}
