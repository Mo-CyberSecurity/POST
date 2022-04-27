const express = require("express"),
  app = express(),
  path = require("path");

const port = process.env.YOUR_PORT || process.env.PORT || 8080;
const key = "Basic bWFuYWdlbWVudDptYW5hZ2VtZW50";
const flag = "flag{post_is_so_ezy}"

app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  req.headers.authorization === key
    ? res.send(flag)
    : res.send("Не правильно, пробуй снова");
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});
