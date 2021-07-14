// circularText();

// function circularText() {

//     let radius = 100
//     let classIndex = 0
//     const game_title = "mathemagic".toUpperCase();
//     let txt = game_title.split("")
//     classIndex = document.getElementsByClassName("game-title")[classIndex];

//     let deg = 360 / txt.length
//     let origin = -90;

//     txt.forEach((ea) => {
//         ea = `<h1 style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;text-align:center;'>${ea}</h1>`;
//         classIndex.innerHTML += ea;
//         origin += deg;
//     });
// }

//audio code
let audio = false;
let myStorage = window.localStorage;

window.onload = () => {
    
myStorage.setItem('audio', audio)
console.log(audio);


}

const startGame = () => {
    console.log("start game");
    
    const playerName = document.querySelector("#text-input").value;
    console.log(playerName);
    
    
    window.localStorage.setItem("current-player", playerName);
    location.href = "pages/game.html"
}


const soundAction = (e) => {

    console.log(e.target)
    let sound_elements = document.getElementById('sound-section').children;

    
   

    if (e.target === sound_elements[1]) {
        sound_elements[0].removeAttribute("hidden")
        sound_elements[1].setAttribute("hidden", true)
        music.play();
        audio = true;
    } else if (e.target === sound_elements[0]) {
        sound_elements[1].removeAttribute("hidden")
        sound_elements[0].setAttribute("hidden", true)
        music.pause();
        music.currentTime = 0;
        audio = false;
    }
    console.log(audio);
    myStorage.setItem('audio', audio);
    
}


const music = new Audio("assets/music_bg.mp3")







document.querySelector("#sound-section").addEventListener("click", soundAction)
document.querySelector("#start").addEventListener("click", startGame)