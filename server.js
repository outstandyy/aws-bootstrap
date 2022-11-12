const express = require('express');
const app = express();
const { hostname } = require('os');

const port = 8080;
const message = `${message}; host: ${hostname()}:${port}\n`

app.get('/', (req, res) => {
	res.send(message);
});

app.listen(port, () => console.log(`Server running at http://${hostname()}:${port}/`));
