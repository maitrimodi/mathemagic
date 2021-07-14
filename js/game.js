// for (let i = 0; i < 5; i++) {
//     document.querySelector("#ghosts").innerHTML += `

//     `
// }

let numbers = [];
let marginTop = 480;
let paddingLeft1 = 0;
let paddingLeft2 = 0;
let paddingLeft3 = 0;
let paddingLeft4 = 0;
let paddingLeft5 = 0;
let ghost;
let randomTransistionDigits = [];
let selectedNumber = Math.floor(Math.random() * (4 - 0) + 0);

const checkCollison = (elem) => {
    // console.log("COLLISION");

    var elm1Rect = elem.getBoundingClientRect();
    var elm2Rect = document.querySelector("#wizard").getBoundingClientRect();


    console.log("elm1Rect.right", elm1Rect.right)
    console.log("elm1Rect.left", elm1Rect.left)
    console.log("elm1Rect.bottom", elm1Rect.bottom)
    console.log("elm1Rect.top", elm1Rect.top)


    console.log("elm2Rect.right", elm2Rect.right)
    console.log("elm2Rect.left", elm2Rect.left)
    console.log("elm2Rect.bottom", elm2Rect.bottom)
    console.log("elm2Rect.top", elm2Rect.top)


    if ((elm1Rect.right >= elm2Rect.left &&
            elm1Rect.left <= elm2Rect.right) &&
        (elm1Rect.bottom >= elm2Rect.top &&
            elm1Rect.top <= elm2Rect.bottom)) {
        console.log("TOUCHING");
        clearInterval(ghost);
    }

}

const generateQuestions = () => {
    let Nos = document.querySelectorAll(".number");
    for (let no of Nos) {
        let firstNumber = Math.floor(Math.random() * ((15 - 1) + 1) + 1);
        let secondNumber = Math.floor(Math.random() * ((10 - 1) + 1) + 1);
        console.log(no);

        no.innerHTML = "<p>" + firstNumber + " x " + secondNumber + " =  ? </p>"

        numbers.push([firstNumber, secondNumber]);

    }
}

window.onload = () => {
    let myStorage = window.localStorage;
    let audio = false;
    audio = myStorage.getItem('audio');

    const music = new Audio("../assets/music_bg.mp3")

    if (audio === "true") {
        music.play();
    } else {
        music.pause();
    }

    let time = document.querySelector("#time-remaining").innerText;

    counter = setInterval(() => {
        document.querySelector("#time-remaining").innerText = time--;
        if (time === -1) clearInterval(counter);
    }, 1000);

    generateQuestions();

    let answer = (numbers[selectedNumber][0] * numbers[selectedNumber][1]);

    document.querySelector("#wizard").innerHTML = "<div> <img src='../assets/wizard.png' class='wizard'></div> <div id='answer' class='answer'>" + answer + "</div>"

    ghost = setInterval(() => {
        ghost1();
        checkCollison(document.querySelector("#ghost1"));
    }, 100)


    // setInterval(ghost2, getRandomInt(80, 450));
    // setInterval(ghost3, getRandomInt(80, 450));
    // setInterval(ghost4, getRandomInt(80, 450));
    // setInterval(ghost5, getRandomInt(80, 450));

    // checkCollison();
}

const ghost1 = () => {
    // console.log("GHOST!");

    let ghost1 = document.querySelector("#ghost1");
    if(paddingLeft1 < 1300){
        paddingLeft1 += 10;
        ghost1.style.paddingLeft = paddingLeft1 + "px";
    } else{
        alert("Game over");
    }
    

}
const ghost2 = () => {

    let ghost2 = document.querySelector("#ghost2");
    paddingLeft2 += 10;
    ghost2.style.paddingLeft = paddingLeft2 + "px";

    console.log(ghost2);
}
const ghost3 = () => {

    let ghost3 = document.querySelector("#ghost3");
    paddingLeft3 += 10;
    ghost3.style.paddingLeft = paddingLeft3 + "px";

    console.log(ghost3);
}
const ghost4 = () => {

    let ghost4 = document.querySelector("#ghost4");
    paddingLeft4 += 10;
    ghost4.style.paddingLeft = paddingLeft4 + "px";

    console.log(ghost4);
}
const ghost5 = () => {

    let ghost5 = document.querySelector("#ghost5");
    paddingLeft5 += 10;
    ghost5.style.paddingLeft = paddingLeft5 + "px";

    console.log(ghost5);
}

const createGame = (e) => {
    e = e || window.event;
    let wizadry = document.querySelector("#wizard");

    if (e.keyCode == '38') { //upp
        if (marginTop <= 0) {
            marginTop = 480
            wizadry.style.marginTop = marginTop + "px"
        } else {
            marginTop -= 120
            wizadry.style.marginTop = marginTop + "px"
        }

    } else if (e.keyCode == '40') { //down
        if (marginTop >= 480) {
            marginTop = 0;
            wizadry.style.marginTop = marginTop + "px"
        } else {
            marginTop += 120
            wizadry.style.marginTop = marginTop + "px"
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
document.onkeydown = createGame;