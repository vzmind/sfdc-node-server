function get(response) {
  console.log("Request handler 'get' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Put your json here !!");
  response.end();
}

exports.get = upload;
