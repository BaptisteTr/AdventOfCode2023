function extractSeeds(input) {

    return [...input.split("\n")[0].matchAll(/(\d+)/g)].map(iterator => parseInt(iterator[0]));
}

export function extractSeedsRange(input) {

    return [...input.split("\n")[0].matchAll(/(\d+ \d+)/g)].map(iterator => iterator[0].split(" ").map(value => parseInt(value)));
}

function getSeedLocation(seed, maps) {

    let currentSeedValue = seed;

    //console.log("Checking seed "+ seed);

    maps.forEach(map => {
        map.every(range => {
            //console.log("Checking range "+range+" for value "+currentSeedValue);
            //If seed value is in source range
            if(currentSeedValue >= range[1] && currentSeedValue < range[1]+range[2]) {
                //We map it to new value
                currentSeedValue = range[0] + (currentSeedValue - range[1]);
                //console.log("New value = "+currentSeedValue);

                //And we break out of loop
                return false;
            }
            return true;
        })
    })

    //console.log("Value found for "+seed+" is "+currentSeedValue);
    return currentSeedValue;
}

function extractMaps(input) {
    //Transform each mapText into an array of range after filtering for unwanted text
    let maps = input.split("map:\n").filter((line) => !line.startsWith("seeds:")).map((mapText) => {
        return mapText.split("\n").filter((mapValue) => mapValue.match(/^\d/)).map((mapValue) => {
            return [...mapValue.matchAll(/(\d+)/g)].map(iterator => parseInt(iterator[0]))
        });
    });
    return maps;
}

function resolveDay5(input) {

    let seeds = extractSeeds(input);
    let seedsLocation = [];
    let maps = extractMaps(input);

    seeds.forEach(seed => {
        seedsLocation.push(getSeedLocation(seed, maps));
    });

    return Math.min(...seedsLocation);

}

function resolveDay5Part2(input) {
    let seedsRange = extractSeedsRange(input);
    let maps = extractMaps(input);
    let rangeMinimums = [];

    console.log(seedsRange);

    seedsRange.forEach((seedRange) => {
        console.log("Checking "+seedRange);
        let rangeLocations = seedRange;
        for(let steps = 1000000; steps >= 1; steps /= 10) {

            let newRanges = [];

            for(let i = rangeLocations[0]; i< rangeLocations[0]+rangeLocations[1]; i = i + steps) {
                if(steps === 1) {
                    //console.log("i = "+i);
                }
                newRanges.push([[i, steps], getSeedLocation(i, maps)]);
            }

            console.log(rangeLocations);

            rangeLocations = newRanges.reduce((previous, current) => {
                return  previous[1] < current[1] ? previous : current;
            })[0];

            console.log(steps);
        }

        console.log(rangeLocations);
        rangeMinimums.push(rangeLocations[0]);

    })

    console.log(rangeMinimums);

    return Math.min(...rangeMinimums);
}

export {resolveDay5, resolveDay5Part2, extractSeeds, getSeedLocation}