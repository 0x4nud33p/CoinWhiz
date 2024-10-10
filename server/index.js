import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();
dotenv.config();
connectDB();

const port = process.env.PORT || 5050;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Started...");
});

app.listen(port, () => {
  console.log(`App is listening on port: http://localhost:${port}`);
});
