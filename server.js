import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
import nodemailer from "nodemailer";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// SQLite setup
const db = new sqlite3.Database("./emails.db", (err) => {
  if (err) console.error(err);
  else console.log("📀 SQLite DB connected.");
});

db.run(`
  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE
  )
`);

// Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sheeish964@gmail.com",
    pass: "ywonkwvwnerrrwiu",
  },
});

// Subscribe route
app.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).send("Missing email.");

  // Read message from message.txt
  let messageText = "";
  try {
    messageText = fs.readFileSync("./tobeemailed.txt", "utf-8");
  } catch (err) {
    return res.status(500).send("Missing message.txt");
  }

  // Insert into DB
  db.run(
    `INSERT INTO subscribers (email) VALUES (?)`,
    [email],
    async (err) => {
      if (err) return res.status(400).send("Already subscribed or invalid.");

      // Send email immediately
      try {
        await transporter.sendMail({
          from: "YOUR_EMAIL@gmail.com",
          to: email,
          subject: "Welcome to the Newsletter!",
          text: messageText,
        });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Subscribed but email failed.");
      }

      res.send("Subscribed successfully, email sent.");
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
