

for(let i =0; i<5; i++){
    document.querySelector("#ghosts").innerHTML += `
    <div>
        <img src="../assets/ghost.png" class="ghost"/>
    </div>
    `
}

window.onload = () => {
        let myStorage = window.localStorage;
    let audio = false;
    audio = myStorage.getItem('audio');

    const music = new Audio("../assets/music_bg.mp3")
    console.log(audio);
    
    
    if(audio === "true"){
        music.play();
        console.log(audio);
        console.log("true");
        
        
    } else {
        music.pause();
        console.log(audio);
        
        console.log("false");
        
    }
}




