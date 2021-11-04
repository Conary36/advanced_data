const resultContents = document.querySelector(".resultContents");
const {SECRET_KEY} = require("./config")

function loadData () {
    fetch("https://genius.p.rapidapi.com/artists/16775/songs", {
    method: "GET",
    headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": SECRET_KEY,
    },
    })
    .then(res => res.json())
    .then((response) => {
        console.log(response);
        displayData(response.response.songs)
    })
    .catch((err) => {
        console.error(err);
    });
}

function displayData (songs) {

    songs.forEach(song => {
        // const songTitle = document.createElement("h2");
        // songTitle.innerText = song.title;
        // resultContents.appendChild(songTitle);
        // const songLyrics = document.createElement("p");
        // songLyrics.innerText = song.lyrics;
        // resultContents.appendChild(songLyrics);
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("resultImage");  
        const image = document.createElement("img"); 
        image.src = song.song_art_image_thumbnail_url;  
        imgContainer.appendChild(image);

        const resultText = document.createElement("div");
        resultText.classList.add("resultText");
        const songTitle = document.createElement("p");
        songTitle.innerText = song.title;
        resultText.appendChild(songTitle);

        resultContents.appendChild(imgContainer);
        resultContents.appendChild(resultText);
    })

//      <div class="resultImage">
//               <img src="" alt="artist">
//       </div>
//        <div class="resultText">
//              <p class="resultDescription"></p>
//       </div>
}


loadData()