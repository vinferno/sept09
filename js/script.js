var game_ul = document.createElement("ul");
 document.body.appendChild(game_ul);


var game_li1 = document.createElement("li");
game_ul.appendChild(game_li1);
var txtnode1 = document.createTextNode("Chess");
game_li1.appendChild(txtnode1);

var game_li2 = document.createElement("li");
game_ul.appendChild(game_li2);
var txtnode2 = document.createTextNode("Poker");
game_li2.appendChild(txtnode2);

var game_li3 = document.createElement("li");
game_ul.appendChild(game_li3);
var txtnode3 = document.createTextNode("Scrabble");
game_li3.appendChild(txtnode3);

var game_li4 = document.createElement("li");
game_ul.appendChild(game_li4);
var txtnode4 = document.createTextNode("Sorry");
game_li4.appendChild(txtnode4);


    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }

    
    game_ul.onclick = function(event) {
        var target = getEventTarget(event);
        target.style.backgroundColor = "green";
        target.parentNode.style.backgroundColor="blue"
    };