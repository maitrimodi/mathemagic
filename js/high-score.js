let myStorage = window.localStorage;
let players = JSON.parse(myStorage.getItem("players"));
console.log(players);

let currentPlayer = myStorage.getItem('current-player')



let tempPlayers = []
for(let i=5; i>=1; i--) {
    let currentPlayers = players.filter((d) => d[1] == i)
    let currentP = currentPlayers.filter((dt) => dt[0] == currentPlayer)
    let othersP = currentPlayers.filter((dt) => dt[0] != currentPlayer)
    tempPlayers = tempPlayers.concat(currentP.concat(othersP))
}
players = tempPlayers;
console.log(players)
console.log(currentPlayer);

for(let i=0; i<5; i++){
    document.querySelector("#player").innerHTML += " <p id='rank'>" + (i+1) + ".</p><p id='player-name'> " + players[i][0] +   " . </p><p id='player-level'>  Level - " + players[i][1] + "</p><br/>";
}        
for(let i = players.length + 1; i<=5; i++) {
    document.querySelector("#player").innerHTML += " <p id='rank'>" + i + ".</p><br/>";
}