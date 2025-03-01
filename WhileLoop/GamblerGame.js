/*Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made.*/
function gamblerGame() {
    let money = 100;
    const goal = 200;
    let bets = 0, wins = 0;

    while (money > 0 && money < goal) {
        bets++;

        // 50% chance of winning
        if (Math.random() < 0.5) {
            money++;  // Win Rs 1
            wins++;
        } else {
            money--;  // Lose Rs 1
        }
    }

    console.log(`Total Bets: ${bets}`);
    console.log(`Total Wins: ${wins}`);
    console.log(`Final Money: Rs ${money}`);
    console.log(money === goal ? "🎉 Goal Reached!" : "💸 Went Broke!");
}

// Run the game
gamblerGame();