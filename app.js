const express = require('express');
const fs = require('fs').promises; // Utilisation correcte

let secret;

const app = express();

app.listen(3000, async () => {
    try {
        secret = await fs.readFile('/run/secrets/mysecret', "utf-8");
        console.log(secret);
    } catch (err) {
        console.error("Error reading secret:", err);
    }
});
