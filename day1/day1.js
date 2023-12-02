function findFirstDigitFromString(line) {
    return line.match(/\d/)[0];
}

function findLastDigitFromString(line) {
    return line.match(/\d(?!.*\d)/)[0];
}

function changeStringNumberToNumberChar(line) {
    let newLine = line;

    let numberToSwap = newLine.match(/(one|two|three|four|five|six|seven|eight|nine)/g);

    if(numberToSwap === null) {
        return line;
    }

    const regex = new RegExp(`${numberToSwap[0]}`);
    newLine = newLine.replace(regex, GetNumberCharFromString(numberToSwap[0]));
    const regex2 = new RegExp(`${numberToSwap[numberToSwap.length-1]}`);
    newLine = newLine.replace(regex2, GetNumberCharFromString(numberToSwap[numberToSwap.length-1]));

    return newLine;
}

function GetNumberCharFromString(text) {
    switch (text) {
        case "one" :
            return "1";
        case "two" :
            return "2";
        case "three" :
            return "3";
        case "four" :
            return "4";
        case "five" :
            return "5";
        case "six" :
            return "6";
        case "seven" :
            return "7";
        case "eight" :
            return "8";
        case "nine" :
            return "9";
    }
}

function FindFirstDigitFromStringConsideringTextDigit(line) {

    let newline = changeStringNumberToNumberChar(line);

    return newline.match(/\d/)[0];
}
function FindLastDigitFromStringConsideringTextDigit(line) {
    let newline = changeStringNumberToNumberChar(line);

    return newline.match(/\d(?!.*\d)/)[0];
}

function resolveDay1(input) {

    let currentSumOfCoordinates = 0;

    input.split("\n").forEach(line => {
        currentSumOfCoordinates += parseInt(findFirstDigitFromString(line) + findLastDigitFromString(line));
    })

    return currentSumOfCoordinates;
}

function resolveDay1Part2(input) {

    let currentSumOfCoordinates = 0;

    input.split("\n").forEach(line => {
        currentSumOfCoordinates += parseInt(FindFirstDigitFromStringConsideringTextDigit(line) + FindLastDigitFromStringConsideringTextDigit(line));

    })

    return currentSumOfCoordinates;
}

export { resolveDay1, resolveDay1Part2, findFirstDigitFromString, findLastDigitFromString, FindFirstDigitFromStringConsideringTextDigit, FindLastDigitFromStringConsideringTextDigit}