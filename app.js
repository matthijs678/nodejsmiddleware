const http = require("http");
const express = require("express");
const app = express();
// const router = express.Router();

function log(req, res, next) {
  // TODO: schrijf in terminal (gebruik console): datum, request method en url
  const datum = (new Date()).toString();
  const requestMethod = req.method;
  const url = req.protocol + '://' + req.get('host') + req.originalUrl;

  console.log(datum, requestMethod, url);
  next();
}

function welcome(req, res, next) {
  // TODO: de tekst "hallo" naar de browser sturen
  res.send("hallo jumbo");
  console.log("send hallo jumbo");
  next();
}

app.use(express.static('/media')); // for images

app.get("/test/", log, (req, res, next) => {
  res.send("<img src=\"/Walter_White_Jr_S5B.png\">");
  console.log("Open ne noor");
  // res.send("test jumbo");
  next();
});

app.get("/", log, welcome);

http.createServer(app).listen(3000, () => {
  console.log("Gestart");
});
