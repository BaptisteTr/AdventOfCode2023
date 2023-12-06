import {resolveDay1, resolveDay1Part2, findFirstDigitFromString, findLastDigitFromString, FindLastDigitFromStringConsideringTextDigit, FindFirstDigitFromStringConsideringTextDigit} from "./day1";
import {content} from "../fileLoader.js";

test("Should find first number from \"pqr3stu8vwx\"", () => {
    expect(findFirstDigitFromString("pqr3stu8vwx")).toBe("3");
})


test("Should find last number from \"pqr3stu8vwx\"", () => {
    expect(findLastDigitFromString("pqr3stu78vwx")).toBe("8");
})

test("Should find coordinates from input", () => {

    const input = "1abc2\n" +
        "pqr3stu8vwx\n" +
        "a1b2c3d4e45f\n" +
        "treb7uchet";

    expect(resolveDay1(input)).toBe(142)
})

test("should resolve day input", async () => {

    const text = await content('./day1/day1input.txt')

    expect(resolveDay1(text)).toBe(54644)
})


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

    expect(FindFirstDigitFromStringConsideringTextDigit(input)).toBe("2")
})

test("Should find first number from eightwothree part2 ", () => {
    const input = "eightwothree";

    expect(FindFirstDigitFromStringConsideringTextDigit(input)).toBe("8")
})


test("Should find last number from line part2 ", () => {
    const input = "two1nine";

    expect(FindLastDigitFromStringConsideringTextDigit(input)).toBe("9")
})

test("Should find last number from eightwothree part2 ", () => {
    const input = "eightwothree";

    expect(FindLastDigitFromStringConsideringTextDigit(input)).toBe("3")
})


test("should resolve day input part 2", async () => {

    const text = await content('./day1/day1input.txt')

    expect(resolveDay1Part2(text)).toBe(53348)
})