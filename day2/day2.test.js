import {content} from "../fileLoader.js";
import {resolveDay2, resolveDay2Part2} from "./day2.js";

test("Example result should be 8 using 12R, 13G and 14B", () => {
    const input = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n" +
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n" +
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n" +
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"

    expect(resolveDay2(input, 12, 13, 14)).toBe(8);
})

test("should resolve day2 input ", async () => {

    const text = await content('./day2/day2input.txt')

    expect(resolveDay2(text, 12, 13, 14)).toBe(2156)
})

test("Example result should be 2286 using part2 resolution", () => {
    const input = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n" +
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n" +
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n" +
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"

    expect(resolveDay2Part2(input)).toBe(2286);
})


test("should resolve day2 part2 input ", async () => {

    const text = await content('./day2/day2input.txt')

    expect(resolveDay2Part2(text)).toBe(66909)
})