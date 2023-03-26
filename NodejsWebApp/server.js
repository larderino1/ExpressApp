'use strict';

var PORT = 80;
var HOST = '0.0.0.0';

var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST, () => {
    console.log(`server working on http://${HOST}:${PORT}`);
});
