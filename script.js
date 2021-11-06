const resultContents = document.querySelector(".resultContents");
const search = document.getElementById("search");
let musicArtist = [];
let token = config.SECRET_KEY;


search.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    const searchValue = e.target.value.toLowerCase();
    const filteredArtists = musicArtist.response.songs.filter(song => {
       return (
         song.artist_names.toLowerCase().includes(searchValue) ||
         song.title.toLowerCase().includes(searchValue)
       );
    });

   displayData(filteredArtists);
    console.log(filteredArtists);
});

const loadData = async() => {
  try{
    const res = await fetch("https://genius.p.rapidapi.com/artists/16775/songs", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": token, 
      },
    })
    musicArtist = await res.json()
    displayData(musicArtist.response.songs);
  }catch(err){
        console.error(err);
  }
}

function displayData (songs) {
  const htmlString = songs
    .map((song) => {//map through the songs using template literals
      return `
            <div class="resultTitle">
                <a href="${song.url}">${song.primary_artist.name}</a>
            </div>
            <div class="resultImage">
                <img src="${song.song_art_image_thumbnail_url}">
            </div>
            <div class="resultText">
                <p>${song.title}</p>
            </div>
            `;
    })
    .join("");
  resultContents.innerHTML = htmlString;

  //*****************SEARCH ALTERNATIVE***************************** */
  // songs.forEach(song => {
  //     const songDiv = document.createElement("div");
  //     songDiv.classList.add("resultTitle");
  //     const titleLink = document.createElement("a");
  //     titleLink.href = song.url;
  //     const songArtist = song.primary_artist.name;
  //     // const songT = song.title;
  //     // titleLink.innerText = songArtist;
  //     songDiv.appendChild(titleLink);

  //     // const songTitle = document.createElement("h2");
  //     // songTitle.innerText = song.title;
  //     // resultContents.appendChild(songTitle);
  //     // const songLyrics = document.createElement("p");
  //     // songLyrics.innerText = song.lyrics;
  //     // resultContents.appendChild(songLyrics);
  //     const imgContainer = document.createElement("div");
  //     imgContainer.classList.add("resultImage");
  //     const image = document.createElement("img");
  //     image.src = song.song_art_image_thumbnail_url;
  //     imgContainer.appendChild(image);

  //     const resultText = document.createElement("div");
  //     resultText.classList.add("resultText");
  //     const songTitle = document.createElement("p");
  //     songTitle.innerText = song.title;
  //     resultText.appendChild(songTitle);

  //     resultContents.appendChild(imgContainer);
  //     resultContents.appendChild(resultText);
  // })

  //  <div class="resultTitle">
  //     <a href="">Artist</a>
  // </div>
  //      <div class="resultImage">
  //               <img src="" alt="artist">
  //       </div>
  //        <div class="resultText">
  //              <p class="resultDescription"></p>
  //       </div>
}


loadData()