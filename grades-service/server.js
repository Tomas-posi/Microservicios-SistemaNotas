const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = "super_secreto";

const pool = new Pool({
  host: "postgres",
  user: "postgres",
  password: "postgres",
  database: "schooldb",
  port: 5432,
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No has iniciado sesión" });
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Token mal formado" });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
}

app.get("/grades", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT subject, grade FROM grades WHERE user_id = $1",
      [req.user.userId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

app.listen(3002, () => {
  console.log("Grades service running on port 3002");
});