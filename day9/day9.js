function isAllZero(array) {
    return array.every(v => v === 0n);
}

function calculateDifferentiationArray(array) {
    let result = [];

    array.forEach((value, index) => {
        if(array[index+1] !== undefined) {
            result.push(array[index+1] - value);
        }
    })

    return result;
}

function resolveLine(valueLine) {
    const values = [...valueLine.matchAll(/(-*\d+)/g)].map(value => BigInt(value[0]))

    let extrapolationArray = [values];

    while(!isAllZero(extrapolationArray[extrapolationArray.length-1])) {
        extrapolationArray.push(calculateDifferentiationArray(extrapolationArray[extrapolationArray.length-1]));
    }

    if(extrapolationArray[extrapolationArray.length-1].length === 0) {
        return 0n;
    }

    for(let i = extrapolationArray.length -1; i > 0; i--) {
        let previousLine = extrapolationArray[i-1];
        previousLine.push(extrapolationArray[i][extrapolationArray[i].length-1] + previousLine[previousLine.length -1]);
    }

    return BigInt(extrapolationArray[0][extrapolationArray[0].length -1]);
}

function resolveReversedLine(valueLine) {
    const values = [...valueLine.matchAll(/(-*\d+)/g)].map(value => BigInt(value[0])).reverse()

    let extrapolationArray = [values];

    while(!isAllZero(extrapolationArray[extrapolationArray.length-1])) {
        extrapolationArray.push(calculateDifferentiationArray(extrapolationArray[extrapolationArray.length-1]));
    }

    if(extrapolationArray[extrapolationArray.length-1].length === 0) {
        return 0n;
    }

    for(let i = extrapolationArray.length -1; i > 0; i--) {
        let previousLine = extrapolationArray[i-1];
        previousLine.push(extrapolationArray[i][extrapolationArray[i].length-1] + previousLine[previousLine.length -1]);
    }

    return BigInt(extrapolationArray[0][extrapolationArray[0].length -1]);
}

function resolveDay9(input) {

    return input.split("\n").reduce((sum, valueLine) => {

        return resolveLine(valueLine) + sum;
    }, 0n)
}

function resolveDay9Part2(input) {

    return input.split("\n").reduce((sum, valueLine) => {

        return resolveReversedLine(valueLine) + sum;
    }, 0n)
}

export {resolveDay9, resolveDay9Part2, resolveLine, isAllZero, calculateDifferentiationArray}