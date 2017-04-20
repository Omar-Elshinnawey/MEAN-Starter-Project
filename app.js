const express = require('express');

var app = express(),
    port = 3000;

app.use('/assets', express.static('./public'));
app.use('/libs', express.static('./node_modules'));

app.get('*', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);