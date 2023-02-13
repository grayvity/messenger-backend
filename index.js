const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

// http://localhost:8888/api/message -  би өөрөө ажиллуулах
// http://192.168.88.123:8888/api/message - сүлжээнд байгаа бусад device/computer -с ажилуулах

const messages = [];

// POST - мессеж явуулах
app.post("/api/message", function (req, res) {
  // req.query.msg => /api/message?msg=hi гэж явуулах үед msg нь hi байна.
  messages.push(req.query.msg);
  res.send("ok");
});
// DELETE - хамгийн сүүлийн мессеж устгах
app.delete("/api/message", function (req, res) {
  messages.pop();
  res.send("ok");
});
// PUT - сүүлийн мессеж засах
app.put("/api/message", function (req, res) {
  messages.pop();
  messages.push(req.query.msg);
  res.send("ok");
});
// GET - надад ирсэн мессежүүдийг харах
app.get("/api/message", function (req, res) {
  res.json(messages);
});

app.listen(8888);
