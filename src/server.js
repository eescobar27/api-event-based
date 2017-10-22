const http = require("http");
const socketIO = require("socket.io");
const config = require("./server.config");
const handler = require("./handler");

const server = http.createServer((request, response) => {

	if(request.method === "GET" && request.url === "/health") {
		console.log("GET /health");
		response.statusCode = 200;
		response.end();
	}
	else {
		// TODO: review if it's neccesary and if the code is appropiate
		response.statusCode = 404;
		response.end();
	}
});

const io = socketIO(server);
io.on("connection", handler);

server.listen(config.PORT, () => {
	console.log(`server listening on port ${config.PORT}`);
});
