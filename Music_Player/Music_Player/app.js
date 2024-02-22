let start = document.querySelector("#start");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let songList = document.querySelector("#songList");
let progress = document.querySelector("#progress");
let cover = document.querySelector("#cover");
let currenCover = 1;
let currentSongId = 1;
let songs = [
    {
        id : 1,
        name : "song1",
        originalName : "Baller",
        cover: "cover1.jpg"
    },
    {
        id : 2,
        name : "song2",
        originalName : "Never Fold",
        cover: "cover2.jpg"
    },
    {
        id : 3,
        name : "song3",
        originalName : "King Shit",
        cover: "cover3"
    },
    {
        id : 4,
        name : "song4",
        originalName : "Hood Anthem",
        cover: "cover4"
    },
    {
        id : 5,
        name : "song5",
        originalName : "Despacito",
        cover: ""
    },
    {
        id : 6,
        name : "song6",
        originalName : "Bewafa",
        cover: ""
    }
]

let audio = new Audio("./media/song1.mp3");

for(let song of songs){
    let li = document.createElement("li");
    li.innerHTML = song.originalName;
    li.setAttribute("id" , song.id);
    li.classList.add("song-item");
    songList.append(li);
}

start.addEventListener('click' , function(){
    audio.paused ? audio.play() : audio.pause();
    let img = document.querySelector("#cover img");
    img.setAttribute("src" , `./assessts/cover${currenCover}.jpg`);
    img.classList.add("cover-img");
    if(start.children[0].classList.contains("fa-play")){
        start.children[0].classList.remove("fa-play");
        start.children[0].classList.add("fa-pause");
    }
    else{
        start.children[0].classList.add("fa-play");
        start.children[0].classList.remove("fa-pause");
    }
})

audio.addEventListener("timeupdate" , function(){
    let currentP = (audio.currentTime * 100 ) / audio.duration;
    progress.value = currentP; 
})

progress.addEventListener("change" , function(){
    audio.currentTime = (progress.value * audio.duration) / 100;;
})

songList.addEventListener('click' , function(e){
    let id = e.target.getAttribute("id");
    currentSongId = id;
    currenCover = id;
    let img = document.querySelector("#cover img");
    img.setAttribute("src" , `./assessts/cover${currenCover}.jpg`);
    img.classList.add("cover-img");
    audio.src = `./media/song${id}.mp3`;
    audio.currentTime = 0;
    audio.play();
    start.children[0].classList.add("fa-play");
    start.children[0].classList.remove("fa-pause");
})

next.addEventListener("click" , function(){
    currentSongId = (currentSongId + 1) % (songs.length + 1);
    if(currentSongId === 0) currentSongId = 1;
    audio.src = `./media/song${currentSongId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    start.children[0].classList.add("fa-play");
    start.children[0].classList.remove("fa-pause");
    currenCover = currentSongId;
    let img = document.querySelector("#cover img");
    img.setAttribute("src" , `./assessts/cover${currenCover}.jpg`);
    img.classList.add("cover-img");
})

previous.addEventListener("click" , function(){
    currentSongId = (currentSongId - 1 ) % ( songs.length + 1);
    if(currentSongId === 0) currentSongId = songs.length;
    audio.src = `./media/song${currentSongId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    start.children[0].classList.add("fa-play");
    start.children[0].classList.remove("fa-pause");
    currenCover = currentSongId;
    let img = document.querySelector("#cover img");
    img.setAttribute("src" , `./assessts/cover${currenCover}.jpg`);
    img.classList.add("cover-img");
})