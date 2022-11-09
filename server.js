const express = require('express');
const app = express();

const message = 'Hello Cloud\n';

app.get('/', (req, res) => {
	res.send(message);
});

app.listen(8080, () => console.log('This app listening on port 8080'));
