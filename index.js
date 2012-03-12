// Include the MVC modules
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

// Your routes are defined here:
var handle = {}
handle["/"] = requestHandlers.start;
handle["/get"] = requestHandlers.get;

// Start the server
server.start(router.route,handle);
