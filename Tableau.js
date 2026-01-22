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
console.log(Tableau());

//Exo 2
