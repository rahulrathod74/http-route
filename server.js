const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Wlcome to Home Page!");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("This is a About Page");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.write('<a href="https://www.masaischool.com">Masai School</a>');
    res.end()
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

// Define the port number and start the server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
