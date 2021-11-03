// server.js
const express = require('express');
// const bodyParser = require("body-parser"); deprecated
const axios = require("axios");
const app = express();
const CORS = require('cors');

//MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());// To parse the incoming requests with JSON payloads
app.use(CORS());


// function musicData(){
//     axios.get("https://genius.p.rapidapi.com/artists/16775/songs")
//     .then(res => {
//         console.log(res.data.response.songs);
//     })
//     .catch(err => console.log(err));

// }
// musicData();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get('/api/music', (req, res) => {
    console.log('Helloooooooooooooooooo!')
});




app.listen(3020, function(){
    console.log('listening on 3020');
})



