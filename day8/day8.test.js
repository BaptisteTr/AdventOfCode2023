import {content} from "../fileLoader.js";
import {resolveDay8, resolveDay8Part2} from "./day8.js";

test("Example result should be 2", () => {
    const input = "RL\n" +
        "\n" +
        "BBB = (DDD, EEE)\n" +
        "CCC = (ZZZ, GGG)\n" +
        "ZZZ = (ZZZ, ZZZ)\n" +
        "AAA = (BBB, CCC)\n" +
        "EEE = (EEE, EEE)\n" +
        "GGG = (GGG, GGG)\n" +
        "DDD = (DDD, DDD)";

    expect(resolveDay8(input)).toBe(2);
})

test("Example result should be 6", () => {
    const input = "LLR\n" +
        "\n" +
        "AAA = (BBB, BBB)\n" +
        "BBB = (AAA, ZZZ)\n" +
        "ZZZ = (ZZZ, ZZZ)";

    expect(resolveDay8(input)).toBe(6);
})

test("should resolve day8 input ", async () => {

    const text = await content('./day8/day8input.txt')

    expect(resolveDay8(text)).toBe(11567);
})

test("Example result should be 6 for part2", () => {
    const input = "LR\n" +
        "\n" +
        "11A = (11B, XXX)\n" +
        "11B = (XXX, 11Z)\n" +
        "11Z = (11B, XXX)\n" +
        "22A = (22B, XXX)\n" +
        "22B = (22C, 22C)\n" +
        "22C = (22Z, 22Z)\n" +
        "22Z = (22B, 22B)\n" +
        "XXX = (XXX, XXX)";


    expect(resolveDay8Part2(input)).toBe(6);
})

test("should resolve day8 input part2 ", async () => {

    const text = await content('./day8/day8input.txt')

    expect(resolveDay8Part2(text)).toBe(9858474970153);
})