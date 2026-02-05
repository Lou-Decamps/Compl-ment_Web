// Exo 1
const tab = [];
let i = 0
delay = 2000;
zone = document.getElementById("valeur");
function Tableau() {
    min = Math.ceil(-10);
    max = Math.floor(40);

    for (let i = 0; i < 20; i++) {
        tab.push(Math.floor(Math.random() * (max - min + 1)) + min);
    };
    return tab;
}

//Exo 3
let intervalId;


function showtabNum() {
    Tableau(tab);
    if (i< tab.length)
    {
        zone.textContent = tab[i];
        i++;
        setInterval(showtabNum, delay);
    }
    else
    {
        clearInterval(this.delay)
        clearInterval(intervalId);
    }
}
Tableau(tab);
const intervalID = setInterval(showtabNum, delay);