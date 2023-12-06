function resolveDay6(input) {

    let timeValues = [...input.split("\n")[0].matchAll(/(\d+)/g)].map(textValue => parseInt(textValue));
    let distanceValues = [...input.split("\n")[1].matchAll(/(\d+)/g)].map(textValue => parseInt(textValue));

    return timeValues.reduce((accumulator, timeValue, currentIndex) => {
        const distanceValue = distanceValues[currentIndex];
        let result = 0;

        for (let timeIndex = 0; timeIndex <= timeValue; timeIndex++) {
            if (timeIndex * (timeValue - timeIndex) > distanceValue) {
                result++
            }
        }

        return result * accumulator;
    }, 1);

}

function resolveDay6Part2(input) {
    let timeValue = parseInt([...input.split("\n")[0].matchAll(/(\d+)/g)].reduce((accumulator,textValue) => {
        return accumulator+textValue[0]}, 0));
    let distanceValue = parseInt([...input.split("\n")[1].matchAll(/(\d+)/g)].reduce((accumulator,textValue) => {
        return accumulator+textValue[0]}, 0));

    let lowerBondTimeToWin = 0;
    let upperBondTimeToWin = 0;

    for (let timeIndex = 0; timeIndex <= timeValue; timeIndex++) {
        if (timeIndex * (timeValue - timeIndex) > distanceValue) {
            lowerBondTimeToWin = timeIndex;
            break;
        }
    }

    for (let timeIndex = timeValue; timeIndex > lowerBondTimeToWin; timeIndex--) {
        if (timeIndex * (timeValue - timeIndex) > distanceValue) {
            upperBondTimeToWin = timeIndex;
            break;
        }
    }

    return upperBondTimeToWin - lowerBondTimeToWin + 1;
}

export {resolveDay6, resolveDay6Part2}