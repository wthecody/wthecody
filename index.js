const express = require('express')
const app = express();
const port = 3000

const path = require('path')
app.use('/', express.static(path.join(__dirname, './public')));

app.use(function (req, res) {
    res.status(404).sendFile(path.join(__dirname, "./public/index.html"));
  })

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);