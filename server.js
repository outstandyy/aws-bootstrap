const express = require('express');
const app = express();
const { hostname } = require('os');

const message = 'Hello Cloud\n';
const port = 8080;

app.get('/', (req, res) => {
	res.send(message);
});

app.listen(port, () => console.log(`Server running at http://${hostname()}:${port}/`));
