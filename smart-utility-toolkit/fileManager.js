const fs = require("fs");

console.log("1. Program started");

fs.writeFile("test.txt", "Hello Node.js", (err) => {

    console.log("2. File operation started");

    if (err) {
        console.log("Error:", err.message);
        return;
    }

    console.log("3. File created");

    fs.readFile("test.txt", "utf8", (err, data) => {

        console.log("4. Reading file");

        if (err) {
            console.log("Error:", err.message);
            return;
        }

        console.log("5. File contents:", data);

        console.log("6. Program completed");
    });
});

console.log("7. This prints before file operation finishes");