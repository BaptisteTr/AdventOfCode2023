function expandSpaceMap(spaceMap) {

    let indexesOfEmptySpaceLines = spaceMap.map((line,index) => index).filter(index => spaceMap[index].every(value => value === '.'))

    let indexesOfEmptySpaceColumns = spaceMap[0].map((value,index) => index).filter(index => {
        for(let y = 0; y < spaceMap.length; y++) {
            if(spaceMap[y][index] !== '.') {
                return false;
            }
        }
        return true;
    })

    let lineInjectedCount = 0;
    indexesOfEmptySpaceLines.forEach(index => {
        spaceMap = [
            ...spaceMap.slice(0, index + lineInjectedCount),
            spaceMap[index + lineInjectedCount],
            ...spaceMap.slice(index + lineInjectedCount)
        ];
        lineInjectedCount++;
    })

    let columnInjectedCount = 0;
    indexesOfEmptySpaceColumns.forEach(index => {
        spaceMap = spaceMap.map(line => {
            return [
                ...line.slice(0, index + columnInjectedCount),
                '.',
                ...line.slice(index + columnInjectedCount)
            ];
        })
        columnInjectedCount++;
    })

    return spaceMap;
}

function extractGalaxiesFromMap(spaceMap) {
    let galaxies = [];

    spaceMap.forEach((line, lineIndex) => {
        line.forEach((value, index) => {
            if(value === "#") {
                galaxies.push([lineIndex, index])
            }
        })
    })

    return galaxies;
}

function getSpaceMapString(spaceMap) {
    return spaceMap.reduce((accumulator,line) => accumulator + line.reduce((accumulator2, value) => accumulator2+value,"") +"\n","")
}

function calculateShortestPathBetweenGalaxies(galaxy, galaxy2) {
    let yDiff = Math.max(galaxy[0], galaxy2[0])-Math.min(galaxy[0],galaxy2[0]);
    let xDiff = Math.max(galaxy[1], galaxy2[1])-Math.min(galaxy[1],galaxy2[1]);
    return yDiff+xDiff;
}

function calculateShortestPathBetweenGalaxiesConsideringExpansionSetAndFactor(galaxy, galaxy2, expansionSet, expansionFactor) {
    const upperBond = Math.max(galaxy[0], galaxy2[0]);
    const lowerBond = Math.min(galaxy[0], galaxy2[0]);
    const leftBond = Math.min(galaxy[1], galaxy2[1]);
    const rightBond = Math.max(galaxy[1], galaxy2[1]);
    let yExpansion = expansionSet[0].reduce((expansionSum, index) => (index < upperBond && index > lowerBond) ? expansionSum+expansionFactor-1 : expansionSum, 0);
    let xExpansion = expansionSet[1].reduce((expansionSum, index) => (index < rightBond && index > leftBond) ? expansionSum+expansionFactor-1 : expansionSum, 0);
    let yDiff = (upperBond-lowerBond)+yExpansion;
    let xDiff = (rightBond-leftBond)+xExpansion;
    return yDiff+xDiff;
}

function resolveDay11(input) {
    let spaceMap = input.split("\n").map(spaceLine => Array.from( spaceLine ));

    spaceMap = expandSpaceMap(spaceMap);

    const galaxies = extractGalaxiesFromMap(spaceMap);

    return galaxies.reduce((pairsSum, galaxy, index) => {
        return pairsSum + galaxies.slice(index + 1).reduce((sum, galaxy2) => {
            return sum + calculateShortestPathBetweenGalaxies(galaxy, galaxy2);
        }, 0)
    }, 0)
}

function calculateExpansionSet(spaceMap) {
    let indexesOfEmptySpaceLines = spaceMap.map((line,index) => index).filter(index => spaceMap[index].every(value => value === '.'))

    let indexesOfEmptySpaceColumns = spaceMap[0].map((value,index) => index).filter(index => {
        for(let y = 0; y < spaceMap.length; y++) {
            if(spaceMap[y][index] !== '.') {
                return false;
            }
        }
        return true;
    })

    return [indexesOfEmptySpaceLines, indexesOfEmptySpaceColumns]
}

function resolveDay11Part2(input, expansionFactor) {
    let spaceMap = input.split("\n").map(spaceLine => Array.from( spaceLine ));

    const galaxies = extractGalaxiesFromMap(spaceMap);

    const expansionSet = calculateExpansionSet(spaceMap);

    return galaxies.reduce((pairsSum, galaxy, index) => {
        return pairsSum + galaxies.slice(index + 1).reduce((sum, galaxy2) => {
            return sum + calculateShortestPathBetweenGalaxiesConsideringExpansionSetAndFactor(galaxy, galaxy2, expansionSet, expansionFactor);
        }, 0)
    }, 0)
}

export {resolveDay11, resolveDay11Part2}