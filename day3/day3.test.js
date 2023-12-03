import {content} from "../fileLoader.js";
import {resolveDay3, resolveDay3Part2} from "./day3.js";

test("Example result should be 4361", () => {
    const input = "467..114..\n" +
        "...*......\n" +
        "..35..633.\n" +
        "......#...\n" +
        "617*......\n" +
        ".....+.58.\n" +
        "..592.....\n" +
        "......755.\n" +
        "...$.*....\n" +
        ".664.598..";

    expect(resolveDay3(input)).toBe(4361);
})

test("should resolve day3 input ", async () => {

    const text = await content('./day3/day3input.txt')

    expect(resolveDay3(text)).toBe(539637);
})

test("Example result should be 467835 for part2", () => {
    const input = "467..114..\n" +
        "...*......\n" +
        "..35..633.\n" +
        "......#...\n" +
        "617*......\n" +
        ".....+.58.\n" +
        "..592.....\n" +
        "......755.\n" +
        "...$.*....\n" +
        ".664.598..";

    expect(resolveDay3Part2(input)).toBe(467835);
})

test("should resolve day3 input part2 ", async () => {

    const text = await content('./day3/day3input.txt')

    expect(resolveDay3Part2(text)).toBe(82818007);
})