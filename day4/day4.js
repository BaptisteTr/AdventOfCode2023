function resolveDay4(input) {

    let cards = input.split("\n");

    return cards.reduce(resolveCardReducer, 0);
}

function resolveCardReducer(accumulator, card) {

    if(card === "") {return accumulator;}

    let winningNumbers = [...card.split("|")[0].split(":")[1].matchAll(/(\d+)[^:]/g)].map(iterator => iterator[1]);
    let resultNumbers = [...card.split("|")[1].matchAll(/(\d+)/g)].map(iterator => iterator[0]);
    let wins = [];

    let result = winningNumbers.reduce((accumulator, winningNumber) => {
        if(resultNumbers.includes(winningNumber)) {
            wins.push(winningNumber);
            return accumulator + 1;
        } else {
            return accumulator;
        }
    },0);

    //console.log(card+ " has "+result+" winning numbers ("+wins+"), so it is worth "+Math.pow(2, result - 1)+" points.");

    if(result === 0 ) {
        return accumulator;
    }

    return accumulator + Math.pow(2, result - 1);
}

function resolveCard(card) {

    if(card === "") {return 0}
    let winningNumbers = [...card.split("|")[0].split(":")[1].matchAll(/(\d+)[^:]/g)].map(iterator => iterator[1]);
    let resultNumbers = [...card.split("|")[1].matchAll(/(\d+)/g)].map(iterator => iterator[0]);


    return winningNumbers.reduce((accumulator, winningNumber) => {
        if (resultNumbers.includes(winningNumber)) {
            return accumulator + 1;
        } else {
            return accumulator;
        }
    }, 0);
}

function resolveDay4Part2(input) {

    let cards = input.split("\n");

    let matchingNumbersCounters = cards.map(card => resolveCard(card));

    let cardCounter = [];

    //First time to create the initial cards
    for(let i = 0; i < matchingNumbersCounters.length - 1; i++) {
        cardCounter.push(1);
    }

    //Second to count the copies
    for(let i = 0; i < matchingNumbersCounters.length; i++) {
        for(let j = 1; j <= matchingNumbersCounters[i]; j++) {
            cardCounter[i+j] += cardCounter[i];
        }
    }

    return cardCounter.reduce((accumulator, value) => {
        return accumulator + value});

}

export {resolveDay4, resolveDay4Part2};