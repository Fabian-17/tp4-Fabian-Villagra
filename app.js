const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Word')
})

app.listen(5000, () => {
    console.log("Listen on the port 6000...");
});