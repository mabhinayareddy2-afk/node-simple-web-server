// Import required modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Helper function to serve HTML files
const serveFile = (res, filePath, statusCode = 200) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
};

// Create server
const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/" || req.url === "/home") {
    filePath = path.join(__dirname, "pages", "home.html");
    serveFile(res, filePath);
  } 
  else if (req.url === "/about") {
    filePath = path.join(__dirname, "pages", "about.html");
    serveFile(res, filePath);
  } 
  else if (req.url === "/contact") {
    filePath = path.join(__dirname, "pages", "contact.html");
    serveFile(res, filePath);
  } 
  else if (req.url === "/style.css") {
    const cssPath = path.join(__dirname, "public", "style.css");
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  }
  else {
    filePath = path.join(__dirname, "pages", "404.html");
    serveFile(res, filePath, 404);
  }
});

// Server listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
