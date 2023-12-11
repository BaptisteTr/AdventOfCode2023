import {content} from "../fileLoader.js";
import {resolveDay11, resolveDay11Part2} from "./day11.js";

test("Example result should be 374", () => {
    const input = "...#......\n" +
        ".......#..\n" +
        "#.........\n" +
        "..........\n" +
        "......#...\n" +
        ".#........\n" +
        ".........#\n" +
        "..........\n" +
        ".......#..\n" +
        "#...#.....";

    expect(resolveDay11(input)).toBe(374);
})

test("should resolve day11 input ", async () => {

    const text = await content('./day11/day11input.txt')

    expect(resolveDay11(text)).toBe(9734203);
})

test("Example result should be 1030 for part 2 with expansion factor 10", () => {
    const input = "...#......\n" +
        ".......#..\n" +
        "#.........\n" +
        "..........\n" +
        "......#...\n" +
        ".#........\n" +
        ".........#\n" +
        "..........\n" +
        ".......#..\n" +
        "#...#.....";

    expect(resolveDay11Part2(input,10)).toBe(1030);
})

test("Example result should be 8410 for part 2 with expansion factor 100", () => {
    const input = "...#......\n" +
        ".......#..\n" +
        "#.........\n" +
        "..........\n" +
        "......#...\n" +
        ".#........\n" +
        ".........#\n" +
        "..........\n" +
        ".......#..\n" +
        "#...#.....";

    expect(resolveDay11Part2(input,100)).toBe(8410);
})

test("should resolve day11 input part2 ", async () => {

    const text = await content('./day11/day11input.txt')

    expect(resolveDay11Part2(text,1000000)).toBe(568914596391);
})