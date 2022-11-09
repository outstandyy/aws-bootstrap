const express = require('express');
const app = express();
const { hostname } = require('os');

const message = 'Hello Cloud\n';

app.get('/', (req, res) => {
	res.send(message);
});

app.listen(8080, () => console.log(`Server running at http://${hostname()}:${port}/`));
