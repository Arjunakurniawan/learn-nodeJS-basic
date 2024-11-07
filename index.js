const http = require("http");
const host = "localhost";
const port = 3002;

//request adalah -> data yang masuk dari luar
//response adalah -> data yang dikeluarkan dari sistem
//callbacks adalah -> parameter yang mau kita panggil nantinya
const server = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.end("MENYALA ABANGKUH");
});

server.listen(port, host, function () {
  console.log(`Server Run http://${host}:${port}`);
});
