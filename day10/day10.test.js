import {content} from "../fileLoader.js";
import {resolveDay10, resolveDay10Part2} from "./day10.js";

test("Example result should be 4", () => {
    const input = ".....\n" +
        ".S-7.\n" +
        ".|.|.\n" +
        ".L-J.\n" +
        ".....";

    expect(resolveDay10(input)).toBe(4);
})

test("Example result should be 8", () => {
    const input = "..F7.\n" +
        ".FJ|.\n" +
        "SJ.L7\n" +
        "|F--J\n" +
        "LJ...";

    expect(resolveDay10(input)).toBe(8);
})


test("should resolve day10 input ", async () => {

    const text = await content('./day10/day10input.txt')

    expect(resolveDay10(text)).toBe(6697);
})


test("Example result should be 4 for part 2 example", () => {
    const input = "..........\n" +
        ".S------7.\n" +
        ".|F----7|.\n" +
        ".||OOOO||.\n" +
        ".||OOOO||.\n" +
        ".|L-7F-J|.\n" +
        ".|II||II|.\n" +
        ".L--JL--J.\n" +
        "..........";

    expect(resolveDay10Part2(input)).toBe(4);
})


test("Example result should be 8 for part 2 example", () => {
    const input = ".F----7F7F7F7F-7....\n" +
        ".|F--7||||||||FJ....\n" +
        ".||.FJ||||||||L7....\n" +
        "FJL7L7LJLJ||LJ.L-7..\n" +
        "L--J.L7...LJS7F-7L7.\n" +
        "....F-J..F7FJ|L7L7L7\n" +
        "....L7.F7||L7|.L7L7|\n" +
        ".....|FJLJ|FJ|F7|.LJ\n" +
        "....FJL-7.||.||||...\n" +
        "....L---J.LJ.LJLJ...";

    expect(resolveDay10Part2(input)).toBe(8);
})

test("Example result should be 10 for part 2 example", () => {
    const input = "" +
        "....................\n" +
        "FF7FSF7F7F7F7F7F---7\n" +
        "L|LJ||||||||||||F--J\n" +
        "FL-7LJLJ||||||LJL-77\n" +
        "F--JF--7||LJLJ7F7FJ-\n" +
        "L---JF-JLJ.||-FJLJJ7\n" +
        "|F|F-JF---7F7-L7L|7|\n" +
        "|FFJF7L7F-JF7|JL---7\n" +
        "7-L-JL7||F7|L7F-7F7|\n" +
        "L.L7LFJ|||||FJL7||LJ\n" +
        "L7JLJL-JLJLJL--JLJ.L";

    expect(resolveDay10Part2(input)).toBe(10);
})


test("should resolve day10 input part2 ", async () => {

    const text = await content('./day10/day10input.txt')

    expect(resolveDay10Part2(text)).toBe(423);
})
