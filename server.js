const express = require('express');
const app = express();
const { hostname } = require('os');

const STACK_NAME = process.env.STACK_NAME || "Unknown Stack";
const port = 8080;
const message = `Hello from host: ${hostname()}:${port} in ${STACK_NAME}\n`

app.get('/', (req, res) => {
	res.send(message);
});

app.listen(port, () => console.log(`Server running at http://${hostname()}:${port}/`));
