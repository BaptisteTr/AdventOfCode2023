import {content} from "../fileLoader.js";
import {
    isFiveOfAKind, isFiveOfAKindWithJoker,
    isFourOfAKind,
    isFullHouse, isHighCard, isOnePair,
    isThreeOfAKind, isThreeOfAKindWithJoker,
    isTwoPair,
    resolveDay7,
    resolveDay7Part2
} from "./day7.js";

test("Example result should be 6440", () => {
    const input = "32T3K 765\n" +
        "T55J5 684\n" +
        "KK677 28\n" +
        "KTJJT 220\n" +
        "QQQJA 483";

    expect(resolveDay7(input)).toBe(6440);
})

test("Should find fiveOfAKind in hand", () => {
    const input ="AAAAA 684";

    expect(isFiveOfAKind(input)).toBeTruthy();
})

test("Should find fourOfAKind in hand", () => {
    const input ="AAAAT 684";

    expect(isFourOfAKind(input)).toBeTruthy();
})


test("Should find fullHouse in hand", () => {
    const input ="AAATT 684";

    expect(isFullHouse(input)).toBeTruthy();
})


test("Should find threeOfAKind in hand", () => {
    const input ="AAAT5 684";

    expect(isThreeOfAKind(input)).toBeTruthy();
})

test("Should find twoPair in hand", () => {
    const input ="ATAT5 684";

    expect(isTwoPair(input)).toBeTruthy();
})

test("Should find onePair in hand", () => {
    const input ="ATAK5 684";

    expect(isOnePair(input)).toBeTruthy();
})

test("Should find highCard in hand", () => {
    const input ="8JKTA 684";

    expect(isHighCard(input)).toBeTruthy();
})

test("should resolve day7 input ", async () => {

    const text = await content('./day7/day7input.txt')

    expect(resolveDay7(text)).toBe(250957639);
})


test("Example result should be 71503 for part2", () => {
    const input = "32T3K 765\n" +
        "T55J5 684\n" +
        "KK677 28\n" +
        "KTJJT 220\n" +
        "QQQJA 483";


    expect(resolveDay7Part2(input)).toBe(5905);
})

test("Should find fiveOfAKind with joker in hand", () => {
    const input ="AAAAJ 684";

    expect(isFiveOfAKindWithJoker(input)).toBeTruthy();
})

test("Should not be find fiveOfAKind with joker in hand", () => {
    const input ="J49J4 548";

    expect(isFiveOfAKindWithJoker(input)).toBeFalsy();
})


test("Should not be find threeOfAKind with joker in hand", () => {
    const input ="2J299 282";

    expect(isThreeOfAKindWithJoker(input)).toBeFalsy();
})


test("should resolve day7 input part2 ", async () => {

    const text = await content('./day7/day7input.txt')

    expect(resolveDay7Part2(text)).toBe(251515496);
})