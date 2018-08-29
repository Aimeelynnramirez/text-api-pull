var http = require("https");

var options = {
  "method": "POST",
  "hostname": "prod-55.eastus.logic.azure.com",
  "port":443,
  "path": "/workflows/8929dc110cd6470ba4c3ab9938d9ed2a/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Jms3Hhg0RsUthn-OByOuK5kwA-DxsZgxWL9A-xhWmmo",
  "headers": {
    "access-control-allow-origin":"*",
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "b67c1676-b398-20f7-3674-7efcd00ee70f"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ text: 'I have a wonderful time by the beach side to see the waves and peaceful seas.' }));
req.end();