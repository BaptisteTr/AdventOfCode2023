import {content} from "../fileLoader.js";
import {calculateDifferentiationArray, isAllZero, resolveDay9, resolveDay9Part2, resolveLine} from "./day9.js";

test("Example result should be 114", () => {
    const input = "0 3 6 9 12 15\n" +
        "1 3 6 10 15 21\n" +
        "10 13 16 21 30 45";

    expect(resolveDay9(input)).toBe(114n);
})

test("should resolve first line and get 18", () => {
    const input = "0 3 6 9 12 15";

    expect(resolveLine(input)).toBe(18n);
})

test("should resolve this reversed line and return 5", () => {
    const input = "45 30 21 16 13 10";

    expect(resolveLine(input)).toBe(5n)
})

test("should resolve this input line", () => {
    const input ="13 28 45 59 57 23 -46 -115 -83 238 1123 2895 5825 9945 14744 18713 18701 9040 -19607 -81725 -198807\n"

    expect(resolveLine(input)).toBe(-401653n)
})

test("array should be all zero and return true", () => {
    const input = [0n, 0n, 0n, 0n];

    expect(isAllZero(input)).toBeTruthy();
})

test("array should not be all zero return false", () => {
    const input = [0n, 15n, 30n, 45n];

    expect(isAllZero(input)).toBeFalsy();
})

test("should calculate differentiation array from example", () => {
    const input = [0n, 15n, 30n, 45n];
    const result = [15n, 15n, 15n];

    expect(calculateDifferentiationArray(input)).toStrictEqual(result);
})

test("should calculate differentiation array from example 2", () => {
    const input = [ 0n, 3n, 6n, 9n, 12n, 15n ];
    const result = [3n,3n,3n,3n,3n];

    expect(calculateDifferentiationArray(input)).toStrictEqual(result);
})

test("should resolve day9 input ", async () => {

    const text = await content('./day9/day9input.txt')

    expect(resolveDay9(text)).toBe(1853145119n);
})

test("should resolve day9 input part2 ", async () => {

    const text = await content('./day9/day9input.txt')

    expect(resolveDay9Part2(text)).toBe(923n);
})