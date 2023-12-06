import {content} from "../fileLoader.js";
import {resolveDay6, resolveDay6Part2} from "./day6.js";

test("Example result should be 288", () => {
    const input = ""+
        "Time:      7  15   30\n" +
        "Distance:  9  40  200";

    expect(resolveDay6(input)).toBe(288);
})

test("should resolve day6 input ", async () => {

    const text = await content('./day6/day6input.txt')

    expect(resolveDay6(text)).toBe(741000);
})

test("Example result should be 71503 for part2", () => {
    const input = ""+
        "Time:      7  15   30\n" +
        "Distance:  9  40  200";


    expect(resolveDay6Part2(input)).toBe(71503);
})


test("should resolve day6 input part2 ", async () => {

    const text = await content('./day6/day6input.txt')

    expect(resolveDay6Part2(text)).toBe(38220708);
})