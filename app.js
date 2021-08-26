console.log('Akash');

// task-1
document.getElementById('topID').style.color = "blue";
document.getElementById('playerID').style.color = "blue";

// task-2
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = "lightgray";
    player.style.margin = "5px";
    player.style.borderRadius = "5px";
}

// task-3
var ul = document.getElementById("ullistID");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("MilkShake"));
     ul.appendChild(li);
    
// function function1() {
//     var ul = document.getElementById("list");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("Four"));
//     ul.appendChild(li);
//   }
  
// task-4
document.getElementById('btnID').addEventListener('click', function () {
    const input = document.getElementById('inputID');
    var ul = document.getElementById("ullistID");
   
    for (let i = 1; i <= input.value; i++)
    {
   
   
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Milkitem - "+i));
        ul.appendChild(li);

        
    }
    input.value = '';
   
});