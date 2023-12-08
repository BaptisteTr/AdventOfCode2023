function placeZZZAtTheEnd(array) {
    for(let i = 0 ; i < array.length ; i++) {
        if(array[i][0]==="ZZZ") array.splice(array.length-1, 0, array.splice(i, 1)[0]);
    }
    return array;
}

function placeAAAAtTheStart(array) {
    for(let i = 0 ; i < array.length ; i++) {
        if(array[i][0]==="AAA") array.splice(0, 0, array.splice(i, 1)[0]);
    }
    return array;
}

function resolveDay8(input) {

    const pathingInstructions = input.split("\n")[0].split("").map(instruction => instruction === 'L' ? 0 : 1);

    const paths = input.split("\n").slice(2).map(path => {
        const key = [...path.matchAll(/(\w+) =/g)][0][1];
        const pathValues = [...path.split("=")[1].matchAll(/(\w+)/g)].map(pathValue => pathValue[0]);

        return [key, pathValues];
    })

    let pathsWithIndexJumpValues = placeZZZAtTheEnd(paths);
    pathsWithIndexJumpValues = placeAAAAtTheStart(paths);

    //I parse path values to index
    paths.forEach((value, index) => {
        pathsWithIndexJumpValues = pathsWithIndexJumpValues.map( pathWithIndex => {
            const currentKey = value[0];
            const currentPathValueLeft = pathWithIndex[1][0];
            const currentPathValueRight = pathWithIndex[1][1];

            return [pathWithIndex[0], [currentPathValueLeft === currentKey ? index : currentPathValueLeft, currentPathValueRight === currentKey ? index : currentPathValueRight]]
        })
    })

    //I clean path names since i don't need it anymore
    pathsWithIndexJumpValues = pathsWithIndexJumpValues.map( pathWithIndex => {
        return pathWithIndex[1];
    })

    let currentPathIndex = 0;
    let currentPathingInstructionIndex = 0;
    let numberOfSteps = 0;



    while(currentPathIndex !== pathsWithIndexJumpValues.length-1) {
        if(currentPathingInstructionIndex === pathingInstructions.length) { currentPathingInstructionIndex = 0}

        currentPathIndex = pathsWithIndexJumpValues[currentPathIndex][pathingInstructions[currentPathingInstructionIndex]];

        currentPathingInstructionIndex++;
        numberOfSteps++;
    }

    return numberOfSteps;
}

function resolveDay8Part2(input) {

    const pathingInstructions = input.split("\n")[0].split("").map(instruction => instruction === 'L' ? 0 : 1);

    const paths = input.split("\n").slice(2).map(path => {
        const key = [...path.matchAll(/(\w+) =/g)][0][1];
        const pathValues = [...path.split("=")[1].matchAll(/(\w+)/g)].map(pathValue => pathValue[0]);

        return [key, pathValues];
    })

    let startingNodes = paths.filter(path => path[0].match(/.*A$/)).map(path => paths.indexOf(path));
    let endingNodes = paths.filter(path => path[0].match(/.*Z$/)).map(path => paths.indexOf(path));


    let pathsWithIndexJumpValues = [...paths];

    //I parse path values to index
    paths.forEach((value, index) => {
        pathsWithIndexJumpValues = pathsWithIndexJumpValues.map( pathWithIndex => {
            const currentKey = value[0];
            const currentPathValueLeft = pathWithIndex[1][0];
            const currentPathValueRight = pathWithIndex[1][1];

            return [pathWithIndex[0], [currentPathValueLeft === currentKey ? index : currentPathValueLeft, currentPathValueRight === currentKey ? index : currentPathValueRight]]
        })
    })

    //I clean path names since i don't need it anymore
    pathsWithIndexJumpValues = pathsWithIndexJumpValues.map( pathWithIndex => {
        return pathWithIndex[1];
    })

    let numberOfStepsArray = [];

    startingNodes.forEach(startingNode => {
        let currentPathIndex = startingNode;
        let currentPathingInstructionIndex = 0;
        let numberOfSteps = 0;

        while(!endingNodes.includes(currentPathIndex)) {
            if(currentPathingInstructionIndex === pathingInstructions.length) { currentPathingInstructionIndex = 0}

            currentPathIndex = pathsWithIndexJumpValues[currentPathIndex][pathingInstructions[currentPathingInstructionIndex]];

            currentPathingInstructionIndex++;
            numberOfSteps++;
        }
        numberOfStepsArray.push(numberOfSteps);

    })

    const gcd = (a, b) => a ? gcd(b % a, a) : b;

    const lcm = (a, b) => a * b / gcd(a, b);

    return numberOfStepsArray.reduce(lcm);
}

export {resolveDay8, resolveDay8Part2}