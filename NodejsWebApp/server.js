'use strict';

const PORT = 80;
const HOST = '0.0.0.0';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST, () => {
    console.log(`server working on http://${HOST}:${PORT}`);
});
