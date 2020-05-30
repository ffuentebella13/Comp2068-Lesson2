/*
    Author: Francis Fuentebella
    Number Guessing Game
*/
console.clear();
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const number = Math.round(Math.random() * (10 - 1) + 1);
console.log(number);


const guess = async guess => {
    return new Promise((resolve, reject) => {
    r1.question("Guess a number between 1 and 10...\n\n", answer => {
        return resolve(number == answer);
    })
});
};

let cont = false;

(async() => {
    while(!cont){
        cont = await guess();
        if(!cont) console.error("You Where Wrong");
}
console.log("Congratulations!");
r1.close();
})();