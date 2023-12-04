import {content} from "../fileLoader.js";
import {resolveDay4, resolveDay4Part2} from "./day4.js";

test("Example result should be 13", () => {
    const input = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\n" +
        "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\n" +
        "Card 184:  1 21 53 59 44 | 69 82 63 72 16 21 14 1 18\n" +
        "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\n" +
        "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\n" +
        "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11\n";

    expect(resolveDay4(input)).toBe(13);
})

test("should resolve day4 input ", async () => {

    const text = await content('./day4/day4input.txt')

    expect(resolveDay4(text)).toBe(19135);
})

test("Example result should be 30 part2", () => {
    const input = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53\n" +
        "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19\n" +
        "Card 184:  1 21 53 59 44 | 69 82 63 72 16 21 14 1 18\n" +
        "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83\n" +
        "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36\n" +
        "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11\n";

    expect(resolveDay4Part2(input)).toBe(30);
})

test("should resolve day4 input part2 ", async () => {

    const text = await content('./day4/day4input.txt')

    expect(resolveDay4Part2(text)).toBe(5704953);
})