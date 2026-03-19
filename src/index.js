const express = require('express');
const app = express();
const port = 3001;

// static for page folder
app.use(express.static('page'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/page/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});