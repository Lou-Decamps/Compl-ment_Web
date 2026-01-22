// Exo 1
function Tableau() {
    this.tableau = [];
    min = Math.ceil(-10);
    max = Math.floor(40);

    for (let i = 0; i < 20; i++) {
        tableau.push(Math.floor(Math.random() * (max - min + 1)) + min);
    };
    return this.tableau;
}

tab = Tableau();
console.log(tab);

//Exo 3
let intervalId;

function stopVal() {
    clearInterval(intervalId);
    intervalId = null;
}

function tabNum() {
    for (let i = 0; i < tab.length; i++) {
        const intervalId =  setInterval(tab[i], 1000);
    }
    stopVal();
    const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

    function myCallback(a, b) {
        // Your code here
        // Parameters are purely optional.
        console.log(a);
        console.log(b);
    }
}

document.getElementById("start").addEventListener("click", tabNum);