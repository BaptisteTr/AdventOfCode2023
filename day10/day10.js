function extractLoopFromMap(pipeMap) {

    const startingIndexY = pipeMap.reduce((indexToFind, line, index) => {
        if(line.includes('S')) {
            return index;
        }
        return indexToFind;
    },0)
    const startingIndexX = pipeMap[startingIndexY].indexOf('S');

    let loop = [0];

    let nextIndex = {
        x : startingIndexX + 1,
        y : startingIndexY,
        previousPosition: 'W',
        loopIndexes: [[startingIndexX,startingIndexY]],
        moveEast : function () {this.x++; this.previousPosition = 'W'},
        moveNorth: function () {this.y--; this.previousPosition = 'S'},
        moveWest: function () {this.x--; this.previousPosition = 'E'},
        moveSouth: function () {this.y++; this.previousPosition = 'N'},
        getValue: function (pipeMap) {return pipeMap[this.y][this.x]}
    };

    //Need to find where to get the first direction
    if(nextIndex.getValue(pipeMap) !== 'J' && nextIndex.getValue(pipeMap) !== '-' && nextIndex.getValue(pipeMap) !== '7') {
        nextIndex.moveWest();
        nextIndex.moveSouth();
        if(nextIndex.getValue(pipeMap) !== 'J' && nextIndex.getValue(pipeMap) !== '|' && nextIndex.getValue(pipeMap) !== 'L') {
            nextIndex.moveNorth();
            nextIndex.moveWest();
        }
    }

    let stepCount = 1;
    while(nextIndex.x !== startingIndexX || nextIndex.y !== startingIndexY) {
        loop.push(stepCount++);
        if(nextIndex.getValue(pipeMap) === '-') {
            nextIndex.previousPosition === 'W' ? nextIndex.moveEast() : nextIndex.moveWest();
        }
        else if(nextIndex.getValue(pipeMap) === '7') {
            nextIndex.previousPosition === 'W' ? nextIndex.moveSouth() : nextIndex.moveWest();
        }
        else if(nextIndex.getValue(pipeMap) === 'J') {
            nextIndex.previousPosition === 'W' ? nextIndex.moveNorth() : nextIndex.moveWest();
        }
        else if(nextIndex.getValue(pipeMap) === '|') {
            nextIndex.previousPosition === 'N' ? nextIndex.moveSouth() : nextIndex.moveNorth();
        }
        else if(nextIndex.getValue(pipeMap) === 'L') {
            nextIndex.previousPosition === 'N' ? nextIndex.moveEast() : nextIndex.moveNorth();
        }
        else if(nextIndex.getValue(pipeMap) === 'F') {
            nextIndex.previousPosition === 'S' ? nextIndex.moveEast() : nextIndex.moveSouth();
        }
    }

    stepCount = 1;

    for(let i = loop.length -1; i > 0; i--) {
        loop[i] = Math.min(stepCount++,loop[i]);
    }
    return loop;
}

function extractNumberOfTilesInLoopFromMap(pipeMap) {

    const startingIndexY = pipeMap.reduce((indexToFind, line, index) => {
        if(line.includes('S')) {
            return index;
        }
        return indexToFind;
    },0)
    const startingIndexX = pipeMap[startingIndexY].indexOf('S');

    let nextIndex = {
        x : startingIndexX + 1,
        y : startingIndexY,
        previousPosition: 'W',
        loopIndexes: [[startingIndexX,startingIndexY]],
        moveEast : function () {this.loopIndexes.push([this.x,this.y]);this.x++; this.previousPosition = 'W'},
        moveNorth: function () {this.loopIndexes.push([this.x,this.y]);this.y--; this.previousPosition = 'S'},
        moveWest: function () {this.loopIndexes.push([this.x,this.y]);this.x--; this.previousPosition = 'E'},
        moveSouth: function () {this.loopIndexes.push([this.x,this.y]);this.y++; this.previousPosition = 'N'},
        getValue: function (pipeMap) {return pipeMap[this.y][this.x]}
    };

    //Need to find where to get the first direction
    if(nextIndex.getValue(pipeMap) !== 'J' && nextIndex.getValue(pipeMap) !== '-' && nextIndex.getValue(pipeMap) !== '7') {
        nextIndex.x--;
        nextIndex.y++;
        nextIndex.previousPosition = 'N';
        if(nextIndex.getValue(pipeMap) !== 'J' && nextIndex.getValue(pipeMap) !== '|' && nextIndex.getValue(pipeMap) !== 'L') {
            nextIndex.y--;
            nextIndex.x--;
            nextIndex.previousPosition = 'W';
        }
    }

    //Swap the starting value by its corresponding pipe
    const westValue = pipeMap[startingIndexY][startingIndexX - 1];
    const eastValue = pipeMap[startingIndexY][startingIndexX + 1];
    const northValue = pipeMap[startingIndexY - 1][startingIndexX];
    const southValue = pipeMap[startingIndexY + 1][startingIndexX];

    if((westValue === '-' || westValue === 'L' || westValue === 'F') && (eastValue === '-' || eastValue === 'J' || eastValue === '7')) {
        pipeMap[startingIndexY][startingIndexX] = '-';
    } else if((westValue === '-' || westValue === 'L' || westValue === 'F') && (northValue === '|' || northValue === '7' || northValue === 'F')) {
        pipeMap[startingIndexY][startingIndexX] = 'J';
    } else if((westValue === '-' || westValue === 'L' || westValue === 'F') && (southValue === '|' || southValue === 'J' || southValue === 'L')) {
        pipeMap[startingIndexY][startingIndexX] = '7';
    } else if((northValue === '|' || northValue === '7' || northValue === 'F') && (eastValue === '-' || eastValue === 'J' || eastValue === '7')) {
        pipeMap[startingIndexY][startingIndexX] = 'L';
    } else if((northValue === '|' || northValue === '7' || northValue === 'F') && (southValue === '|' || southValue === 'J' || southValue === 'L')) {
        pipeMap[startingIndexY][startingIndexX] = '|';
    } else if((eastValue === '-' || eastValue === 'J' || eastValue === '7')  && (southValue === '|' || southValue === 'J' || southValue === 'L')) {
        pipeMap[startingIndexY][startingIndexX] = 'F';
    }

    while(nextIndex.x !== startingIndexX || nextIndex.y !== startingIndexY) {
        if(nextIndex.getValue(pipeMap) === '-') {
            nextIndex.previousPosition === 'W' ? nextIndex.moveEast() : nextIndex.moveWest();
        }
        else if(nextIndex.getValue(pipeMap) === '7') {
            nextIndex.previousPosition === 'W' ? nextIndex.moveSouth() : nextIndex.moveWest();
        }
        else if(nextIndex.getValue(pipeMap) === 'J') {
            nextIndex.previousPosition === 'W' ? nextIndex.moveNorth() : nextIndex.moveWest();
        }
        else if(nextIndex.getValue(pipeMap) === '|') {
            nextIndex.previousPosition === 'N' ? nextIndex.moveSouth() : nextIndex.moveNorth();
        }
        else if(nextIndex.getValue(pipeMap) === 'L') {
            nextIndex.previousPosition === 'N' ? nextIndex.moveEast() : nextIndex.moveNorth();
        }
        else if(nextIndex.getValue(pipeMap) === 'F') {
            nextIndex.previousPosition === 'S' ? nextIndex.moveEast() : nextIndex.moveSouth();
        }
    }

    let mapString = ""
    pipeMap.forEach(line => mapString+=line.reduce((stringv,char) => stringv+char)+"\n");

    return pipeMap.reduce((insideCount, line, indexY) => {

        let currentlyInsideLoop = false;
        return insideCount + line.reduce((insideCount2, value, indexX) => {

            if(currentlyInsideLoop === true && !nextIndex.loopIndexes.some(indexes => indexes[0] === indexX && indexes[1] === indexY)) {
                //console.log(indexX+" is inside the loop!")
                return insideCount2 + 1;
            } else if (nextIndex.loopIndexes.some(indexes => indexes[0] === indexX && indexes[1] === indexY) && (pipeMap[indexY][indexX] === 'F' || pipeMap[indexY][indexX] === '|' || pipeMap[indexY][indexX] === '7')){
                currentlyInsideLoop = !currentlyInsideLoop;
            }
            return insideCount2;
        }, 0)

    },0)
}

function resolveDay10 (input) {
    const pipeMap = input.split("\n").map(line => {
        return Array.from( line );
    });

    let loop = extractLoopFromMap(pipeMap);

    return loop.reduce((max, value) => {
        if(value > max) {
            return value;
        } else {
            return max;
        }
    },0);
}

function resolveDay10Part2(input) {
    const pipeMap = input.split("\n").map(line => {
        return Array.from( line );
    });

    return extractNumberOfTilesInLoopFromMap(pipeMap);
}

export {resolveDay10,resolveDay10Part2};