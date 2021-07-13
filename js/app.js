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

const soundAction = (e) => {

    console.log(e.target)
    let sound_elements = document.getElementById('sound-section').children;

    if (e.target === sound_elements[1]) {
        sound_elements[0].removeAttribute("hidden")
        sound_elements[1].setAttribute("hidden", true)
        music.play();
    } else if (e.target === sound_elements[0]) {
        sound_elements[1].removeAttribute("hidden")
        sound_elements[0].setAttribute("hidden", true)
        music.pause();
        music.currentTime = 0;
    }
}
const music = new Audio("assets/music_bg.mp3")
console.log(document.querySelector("#sound-section"));


document.querySelector("#sound-section").addEventListener("click", soundAction)


