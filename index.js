const express = require("express");
const app = express();

// http://localhost:8888/api/message -  би өөрөө ажиллуулах
// http://192.168.88.123:8888/api/message - сүлжээнд байгаа бусад device/computer -с ажилуулах

const messages = [];

// POST - мессеж явуулах
app.post("/api/message", function (req, res) {
  // req.query.msg => /api/message?msg=hi гэж явуулах үед msg нь hi байна.
  res.send("Thanks you, POST");
});
// DELETE - хамгийн сүүлийн мессеж устгах
app.delete("/api/message", function (req, res) {
  res.send("Thanks you, DELETE");
});
// PUT - сүүлийн мессеж засах
app.put("/api/message", function (req, res) {
  res.send("Thanks you, PUT");
});
// GET - надад ирсэн мессежүүдийг харах
app.get("/api/message", function (req, res) {
  res.send("Thanks you, GET");
});

app.listen(8888);
