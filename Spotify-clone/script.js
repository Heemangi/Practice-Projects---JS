console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('Let Me Down Slowly Alec Benjamin(PagalWorld).mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName:"Let Me Down Slowly" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName:"Heeriye" , filePath:"songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName:"Kesariya" , filePath:"songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName:"Arjan Vailley" , filePath:"songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName:"Satranga" , filePath:"songs/5.mp3" , coverPath: "covers/5.jpg"},
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText;
})

// Handle play pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('isong')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}

Array.from(document.getElementsByClassName('isong')).forEach((element)=>{
    element.addEventListener('click' , (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        sname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');


    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0;
    }
    else {
        songIndex += 1; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    sname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else {
        songIndex -= 1; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    sname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})