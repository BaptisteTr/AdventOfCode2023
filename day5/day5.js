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

function getSeedFromLocation(location, maps) {

    let currentLocationValue = location;

    maps.slice().reverse().forEach(map => {
        map.every(range => {
            //console.log("Checking range "+range+" for value "+currentSeedValue);
            //If seed value is in source range
            if(currentLocationValue >= range[0] && currentLocationValue < range[0]+range[2]) {
                //We map it to new value
                currentLocationValue = range[1] + (currentLocationValue - range[0]);
                //console.log("New value = "+currentSeedValue);

                //And we break out of loop
                return false;
            }
            return true;
        })
    })

    return currentLocationValue;
}

function extractMaps(input) {
    //Transform each mapText into an array of range after filtering for unwanted text
    return input.split("map:\n").filter((line) => !line.startsWith("seeds:")).map((mapText) => {
        return mapText.split("\n").filter((mapValue) => mapValue.match(/^\d/)).map((mapValue) => {
            return [...mapValue.matchAll(/(\d+)/g)].map(iterator => parseInt(iterator[0]))
        });
    });
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

function isContainedInSeedsRange(seed, seedsRange) {

    let isFound = false;
    seedsRange.forEach(seedRange => {
        if(seed >= seedRange[0] && seed < seedRange[0]+seedRange[1]) {
            isFound = true;
        }
    })

    return isFound;
}

function resolveDay5Part2(input) {
    let seedsRange = extractSeedsRange(input);
    let maps = extractMaps(input);

    for(let i = 0; true; i++) {
        if(isContainedInSeedsRange(getSeedFromLocation(i, maps), seedsRange)) {
            return i;
        }
    }
}

export {resolveDay5, resolveDay5Part2, extractSeeds, getSeedLocation}