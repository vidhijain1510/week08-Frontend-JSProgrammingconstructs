//Extend the Flip Coin problem till either Heads or Tails wins 11 times.
function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

let headsCount = 0, tailsCount = 0;
const targetWins = 11;

while (headsCount < targetWins && tailsCount < targetWins) {
    let result = flipCoin();
    
    if (result === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flip: ${result} | Heads: ${headsCount} | Tails: ${tailsCount}`);
}

console.log(`${headsCount === targetWins ? "Heads" : "Tails"} wins 11 times!`);