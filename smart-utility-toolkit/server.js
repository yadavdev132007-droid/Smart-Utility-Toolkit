const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to Node Server");
    }

    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("About Page");
    }

    else if (req.url === "/contact" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Contact Page");
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});