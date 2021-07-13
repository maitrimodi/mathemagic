console.log(document.querySelector("#ghost"));

for(let i =0; i<5; i++){
    document.querySelector("#ghosts").innerHTML += `
    <div>
        <img src="/assets/ghost.png" class="ghost"/>
    </div>
    `
}

