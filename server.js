// server.js
const express = require('express');
// const bodyParser = require("body-parser"); deprecated
const app = express();
//MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());// To parse the incoming requests with JSON payloads

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// app.get('/api/music', (req, res) => {
//     console.log('Helloooooooooooooooooo!')
// });




app.listen(3020, function(){
    console.log('listening on 3020');
})



