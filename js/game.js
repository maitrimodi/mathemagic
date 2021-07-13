

for(let i =0; i<5; i++){
    document.querySelector("#ghosts").innerHTML += `
    <div>
        <img src="../assets/ghost.png" class="ghost"/>
        <div id="question" class="question">
            <div class="number">
            
            </div>
        </div>
    </div>
    `
}

let numbers = [];

let selectedNumber = Math.floor(Math.random() * (4 - 0) + 0);

const generateQuestions = () => {
    let Nos = document.querySelectorAll(".number");
    for(let no of Nos){
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
   
    if(audio === "true"){
        music.play();
    } else {
        music.pause();
    }

    let time = document.querySelector("#time-remaining").innerText;
    
   counter = setInterval(() => {
        document.querySelector("#time-remaining").innerText = time--;
        if(time === -1) clearInterval(counter);
    }, 1000);
    
    
    
    generateQuestions();
    
    

    
    let answer = (numbers[selectedNumber][0] * numbers[selectedNumber][1]);
    
    document.querySelector("#wizard").innerHTML = "<div> <img src='../assets/wizard.png' class='wizard'></div> <div id='answer' class='answer'>" + answer + "</div>"
    

    
    
    
    
   
}

   
   
    
    





