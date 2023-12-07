function extractKind(hands, testFunction) {
    return hands.filter(testFunction)
}

function uniqueChar(str) {
    // Use a regex pattern to match unique characters
    return [...new Set(str.match(/(.)(?!\1)/g))];
}

function isFiveOfAKind(hand) {
    const handValue = hand.split(" ")[0];
    return uniqueChar(handValue).length === 1
}

function isFourOfAKind(hand) {
    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    if(uniqueChars.length === 2) {
        return getMaxIterationOfItemInHand(uniqueChars, handValue) === 4;
    }
    return false;
}

function getIterationsOfCharsInHand(uniqueChars, handValue) {
    return uniqueChars.map(value => {
        const regex = new RegExp(value, "g");
        return (handValue.match(regex) || []).length;
    });
}

function isFullHouse(hand) {
    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    if(uniqueChars.length === 2) {
        let charsValue = getIterationsOfCharsInHand(uniqueChars, handValue);
        return (charsValue.includes(3) && charsValue.includes(2));
    }
    return false;
}

function getMaxIterationOfItemInHand(uniqueChars, handValue) {
    return uniqueChars.reduce((accumulator, value) => {
        const regex = new RegExp(value, "g");
        return Math.max(accumulator, (handValue.match(regex) || []).length);
    }, 0);
}

function isThreeOfAKind(hand) {
    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    if(uniqueChars.length === 3) {
        return getMaxIterationOfItemInHand(uniqueChars, handValue) === 3;
    }
    return false;
}

function isTwoPair(hand) {
    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    if(uniqueChars.length === 3) {
        return getMaxIterationOfItemInHand(uniqueChars, handValue) === 2;
    }
    return false;
}

function isOnePair(hand) {
    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    if(uniqueChars.length === 4) {
        return getMaxIterationOfItemInHand(uniqueChars, handValue) === 2;
    }
}

function isHighCard(hand) {
    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    return uniqueChars.length === 5;
}

function compareCardValues(card1, card2) {
    let valuesOrdered = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

    return valuesOrdered.indexOf(card1) > valuesOrdered.indexOf(card2) ? -1 : valuesOrdered.indexOf(card1) < valuesOrdered.indexOf(card2) ? 1 : 0;

}

function compareCardValuesWithJoker(card1, card2) {
    let valuesOrdered = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];

    return valuesOrdered.indexOf(card1) > valuesOrdered.indexOf(card2) ? -1 : valuesOrdered.indexOf(card1) < valuesOrdered.indexOf(card2) ? 1 : 0;

}

function sortResults(hand1, hand2) {

    for(let i = 0; i < 5; i++) {
        const compareValue = compareCardValues(hand1.charAt(i), hand2.charAt(i));
        if(compareValue !== 0){
            return compareValue;
        }
    }

    return 0;

}

function extractBid(hand) {
    return parseInt(hand.split(" ")[1]);
}

function resolveDay7(input) {

    let hands = input.split("\n");
    
    let fiveOfAKinds = extractKind(hands, isFiveOfAKind).sort(sortResults);
    let fourOfAKinds = extractKind(hands, isFourOfAKind).sort(sortResults);
    let fullHouses = extractKind(hands, isFullHouse).sort(sortResults);
    let threeOfAKind = extractKind(hands, isThreeOfAKind).sort(sortResults);
    let twoPair = extractKind(hands, isTwoPair).sort(sortResults);
    let onePair = extractKind(hands, isOnePair).sort(sortResults);
    let highCard = extractKind(hands, isHighCard).sort(sortResults);

    const orderedHands = [...highCard,...onePair,...twoPair,...threeOfAKind,...fullHouses,...fourOfAKinds,...fiveOfAKinds];
    let currentRank = 1;

    return orderedHands.reduce((accumulator, hand) => {
        return accumulator + extractBid(hand) * currentRank++;
    },0)

}

function getJokerOccurrences(hand) {
    return getMaxIterationOfItemInHand(['J'], hand);
}

function getMaxNonJokerOccurrences(uniqueChars, hand) {
    uniqueChars.splice(uniqueChars.indexOf('J'),1);
    return getMaxIterationOfItemInHand(uniqueChars, hand);
}

function isFiveOfAKindWithJoker(hand) {

    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);

    return uniqueChars.length === 1 || (uniqueChars.includes('J') && (getJokerOccurrences(handValue) + getMaxNonJokerOccurrences(uniqueChars, handValue)) === 5)
}

function isFourOfAKindWithJoker(hand) {

    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    if(uniqueChars.length === 2 && !uniqueChars.includes('J')) {
        return getMaxIterationOfItemInHand(uniqueChars, handValue) === 4;
    } else if(uniqueChars.includes('J')) {
        return (getJokerOccurrences(handValue) + getMaxNonJokerOccurrences(uniqueChars, handValue)) === 4;
    }
    return false;
}

function isFullHouseWithJoker(hand) {

    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    let charsValue = getIterationsOfCharsInHand(uniqueChars, handValue);
    if(uniqueChars.length === 2 && !uniqueChars.includes('J')) {
        return (charsValue.includes(3) && charsValue.includes(2));
    } else if(getJokerOccurrences(handValue) === 1 && uniqueChars.length === 3) {
        return getMaxIterationOfItemInHand(uniqueChars, handValue) === 2;
    }
    return false;
}

function isThreeOfAKindWithJoker(hand) {

    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    if(uniqueChars.length === 3 && !uniqueChars.includes('J')) {
        return getMaxIterationOfItemInHand(uniqueChars, handValue) === 3;
    } else if(uniqueChars.includes('J') && uniqueChars.length !== 3) {
        return (getJokerOccurrences(handValue) + getMaxNonJokerOccurrences(uniqueChars, handValue)) === 3;
    }
    return false;
}


function isTwoPairWithJoker(hand) {
    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    if(uniqueChars.length === 3 && !uniqueChars.includes('J')) {
        return getMaxIterationOfItemInHand(uniqueChars, handValue) === 2;
    }
    return false;
}

function isOnePairWithJoker(hand) {
    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    if(uniqueChars.length === 4 && !uniqueChars.includes('J')) {
        return getMaxIterationOfItemInHand(uniqueChars, handValue) === 2;
    } else if (uniqueChars.includes('J')){
        return (getJokerOccurrences(handValue) + getMaxNonJokerOccurrences(uniqueChars, handValue)) === 2;
    }
    return false;
}

function isHighCardWithJoker(hand) {
    const handValue = hand.split(" ")[0];
    const uniqueChars = uniqueChar(handValue);
    return uniqueChars.length === 5 && !uniqueChars.includes('J');
}

function sortResultsWithJoker(hand1, hand2) {

    for(let i = 0; i < 5; i++) {
        const compareValue = compareCardValuesWithJoker(hand1.charAt(i), hand2.charAt(i));
        if(compareValue !== 0){
            return compareValue;
        }
    }

    return 0;

}

function resolveDay7Part2(input) {
    let hands = input.split("\n");

    let fiveOfAKinds = extractKind(hands, isFiveOfAKindWithJoker).sort(sortResultsWithJoker);
    let fourOfAKinds = extractKind(hands, isFourOfAKindWithJoker).sort(sortResultsWithJoker);
    let fullHouses = extractKind(hands, isFullHouseWithJoker).sort(sortResultsWithJoker);
    let threeOfAKind = extractKind(hands, isThreeOfAKindWithJoker).sort(sortResultsWithJoker);
    let twoPair = extractKind(hands, isTwoPairWithJoker).sort(sortResultsWithJoker);
    let onePair = extractKind(hands, isOnePairWithJoker).sort(sortResultsWithJoker);
    let highCard = extractKind(hands, isHighCardWithJoker).sort(sortResultsWithJoker);

    const orderedHands = [...highCard,...onePair,...twoPair,...threeOfAKind,...fullHouses,...fourOfAKinds,...fiveOfAKinds];

    let currentRank = 1;

    return orderedHands.reduce((accumulator, hand) => {
        return accumulator + extractBid(hand) * currentRank++;
    },0)
}

export {resolveDay7, resolveDay7Part2, isFiveOfAKind, isFourOfAKind, isFullHouse, isThreeOfAKind, isTwoPair, isOnePair, isHighCard, isFiveOfAKindWithJoker, isThreeOfAKindWithJoker}