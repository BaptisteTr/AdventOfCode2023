const { readFile } = require('fs/promises')
function resolveDay1(input) {

    let currentSumOfCoordinates = 0;

    input.split("\n").forEach(line => {
        currentSumOfCoordinates += parseInt(findFirstNumber(line) + findLastNumber(line));
    })

    return currentSumOfCoordinates;
}

function findFirstNumber(line) {
    return line.match(/\d/)[0];
}

function findLastNumber(line) {
    return line.match(/\d(?!.*\d)/)[0];
}

test("Should find first number from \"pqr3stu8vwx\"", () => {
    expect(findFirstNumber("pqr3stu8vwx")).toBe("3");
})


test("Should find last number from \"pqr3stu8vwx\"", () => {
    expect(findLastNumber("pqr3stu78vwx")).toBe("8");
})

test("Should find coordinates from input", () => {

    const input = "1abc2\n" +
        "pqr3stu8vwx\n" +
        "a1b2c3d4e45f\n" +
        "treb7uchet";

    expect(resolveDay1(input)).toBe(142)
})

async function content(path) {
    return await readFile(path, 'utf8')
}

test("should resolve day input", async () => {

    const text = await content('./day1input.txt')

    expect(resolveDay1(text)).toBe(54644)
})


function changeStringNumberToNumberChar(line) {
    let newLine = line;

    if(line === "") {
        return 0;
    }

    let numberToSwap = newLine.match(/(one|two|three|four|five|six|seven|eight|nine)/g);

    if(numberToSwap === null) {
        return 0;
    }

    const regex = new RegExp(`${numberToSwap[0]}`);
    newLine = newLine.replace(regex, swapTextToNumber(numberToSwap[0]));
    const regex2 = new RegExp(`${numberToSwap[numberToSwap.length-1]}`);
    newLine = newLine.replace(regex2, swapTextToNumber(numberToSwap[numberToSwap.length-1]));

    return newLine;
}

function swapTextToNumber(text) {
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

function findFirstNumberPart2(line) {

    let newline = changeStringNumberToNumberChar(line);

    return newline.match(/\d/)[0];
}
function findLastNumberPart2(line) {
    let newline = changeStringNumberToNumberChar(line);

    return newline.match(/\d(?!.*\d)/)[0];
}

function resolveDay1Part2(input) {

    let currentSumOfCoordinates = 0;

    input.split("\n").forEach(line => {
        currentSumOfCoordinates += parseInt(findFirstNumberPart2(line) + findLastNumberPart2(line));
    })

    return currentSumOfCoordinates;
}

test("Should find coordinates part2 ", () => {
    const input = "two1nine\n" +
        "eightwothree\n" +
        "abcone2threexyz\n" +
        "xtwone3four\n" +
        "4nineeightseven2\n" +
        "zoneight234\n" +
        "7pqrstsixteen"

    expect(resolveDay1Part2(input)).toBe(281)
})

test("Should find first number from line part2 ", () => {
    const input = "two1nine";

    expect(findFirstNumberPart2(input)).toBe("2")
})

test("Should find first number from eightwothree part2 ", () => {
    const input = "eightwothree";

    expect(findFirstNumberPart2(input)).toBe("8")
})


test("Should find last number from line part2 ", () => {
    const input = "two1nine";

    expect(findLastNumberPart2(input)).toBe("9")
})

test("Should find last number from eightwothree part2 ", () => {
    const input = "eightwothree";

    expect(findLastNumberPart2(input)).toBe("3")
})


test("should resolve day input part 2", async () => {

    const text = await content('./day1input.txt')

    expect(resolveDay1Part2(text)).toBe(54644)
})