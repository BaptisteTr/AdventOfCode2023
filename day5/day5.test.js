import {content} from "../fileLoader.js";
import {extractSeeds, extractSeedsRange, getSeedLocation, resolveDay5, resolveDay5Part2} from "./day5.js";

test("Example result should be 35", () => {
    const input = "seeds: 79 14 55 13\n" +
        "\n" +
        "seed-to-soil map:\n" +
        "50 98 2\n" +
        "52 50 48\n" +
        "\n" +
        "soil-to-fertilizer map:\n" +
        "0 15 37\n" +
        "37 52 2\n" +
        "39 0 15\n" +
        "\n" +
        "fertilizer-to-water map:\n" +
        "49 53 8\n" +
        "0 11 42\n" +
        "42 0 7\n" +
        "57 7 4\n" +
        "\n" +
        "water-to-light map:\n" +
        "88 18 7\n" +
        "18 25 70\n" +
        "\n" +
        "light-to-temperature map:\n" +
        "45 77 23\n" +
        "81 45 19\n" +
        "68 64 13\n" +
        "\n" +
        "temperature-to-humidity map:\n" +
        "0 69 1\n" +
        "1 0 69\n" +
        "\n" +
        "humidity-to-location map:\n" +
        "60 56 37\n" +
        "56 93 4";

    expect(resolveDay5(input)).toBe(35);
})

test("should extract seeds from input", () => {

    const input = "seeds: 79 14 55 13\n" +
        "\n" +
        "seed-to-soil map:\n" +
        "50 98 2\n" +
        "52 50 48\n";

    const seeds = extractSeeds(input);

    expect(seeds).toStrictEqual([79,14,55,13])
})

test("Example result should get seed location 82 for seed 79", () => {
    let maps = [
        [ [ 50, 98, 2 ], [ 52, 50, 48 ] ],
        [ [ 0, 15, 37 ], [ 37, 52, 2 ], [ 39, 0, 15 ] ],
        [ [ 49, 53, 8 ], [ 0, 11, 42 ], [ 42, 0, 7 ], [ 57, 7, 4 ] ],
        [ [ 88, 18, 7 ], [ 18, 25, 70 ] ],
        [ [ 45, 77, 23 ], [ 81, 45, 19 ], [ 68, 64, 13 ] ],
        [ [ 0, 69, 1 ], [ 1, 0, 69 ] ],
        [ [ 60, 56, 37 ], [ 56, 93, 4 ] ]
    ];

    expect(getSeedLocation(79,maps)).toBe(82);
})


test("should resolve day5 input ", async () => {

    const text = await content('./day5/day5input.txt')

    expect(resolveDay5(text)).toBe(57075758);
})

test("should extract seeds range from input", () => {

    const input = "seeds: 79 14 55 13\n" +
        "\n" +
        "seed-to-soil map:\n" +
        "50 98 2\n" +
        "52 50 48\n";

    const seeds = extractSeedsRange(input);

    expect(seeds).toStrictEqual([[79,14],[55,13]])
})

test("Example result should be 46 for part2", () => {
    const input = "seeds: 79 14 55 13\n" +
        "\n" +
        "seed-to-soil map:\n" +
        "50 98 2\n" +
        "52 50 48\n" +
        "\n" +
        "soil-to-fertilizer map:\n" +
        "0 15 37\n" +
        "37 52 2\n" +
        "39 0 15\n" +
        "\n" +
        "fertilizer-to-water map:\n" +
        "49 53 8\n" +
        "0 11 42\n" +
        "42 0 7\n" +
        "57 7 4\n" +
        "\n" +
        "water-to-light map:\n" +
        "88 18 7\n" +
        "18 25 70\n" +
        "\n" +
        "light-to-temperature map:\n" +
        "45 77 23\n" +
        "81 45 19\n" +
        "68 64 13\n" +
        "\n" +
        "temperature-to-humidity map:\n" +
        "0 69 1\n" +
        "1 0 69\n" +
        "\n" +
        "humidity-to-location map:\n" +
        "60 56 37\n" +
        "56 93 4";


    expect(resolveDay5Part2(input)).toBe(46);
})

test("should resolve day5 input part2 ", async () => {

    const text = await content('./day5/day5input.txt')

    expect(resolveDay5Part2(text)).toBe(31161857);
})