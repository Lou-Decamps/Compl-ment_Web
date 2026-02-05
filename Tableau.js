// Exo 1
const tab = [];
let i = 0
const delay = 2000;


function Tableau(min, max) {
    min = Math.ceil(-10);
    max = Math.floor(40);

    for (let i = 0; i < 20; i++) {
        tab.push(Math.floor(Math.random() * (max - min + 1)) + min);
    };
    return tab;
}

//Exo 3
let intervalId;
const zone = document.getElementById("valeur");
var text = document.getElementById("text");
//const text = document.getElementById("text");

// function showtabNum() {
//     Tableau(tab);
//     if (i< tab.length)
//     {
//         zone.textContent = tab[i];
//         i++;
//         setInterval(showtabNum, delay);
//     }
//     else
//     {
//         clearInterval(this.delay)
//         clearInterval(intervalId);
//     }
// }
setInterval(function ()
{
    const val = tab[i];
    zone.textContent = val;
    color(val);
    i++;
}, delay);

function color(num) {
    zone.classList.remove(
        "classe-1", "classe-2", "classe-3", "classe-4"
    )

    if (num <= 0) {
        document.getElementById("text").textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        zone.classList.add("classe-1");
    }
    else if (num >= 0 && num < 20) {
        document.getElementById("text").textContent = "";
        zone.classList.add("classe-2");
    }
    else if (num >= 20 && num < 30) {
        document.getElementById("text").textContent = "";
        zone.classList.add("classe-3");
    }
    else if (num >= 30 && num <= 40) {
        document.getElementById("text").textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        zone.classList.add("classe-4");
    }
}

Tableau(tab);