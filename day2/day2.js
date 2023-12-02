function resolveDay2(input, red, green, blue) {

    const games = input.split("\n");

    const resolveGame = (accumulator, value, index) => {
        let isGamePossible = true;
        let gameString = value.replace(/Game \d+:/g,"")

        gameString.split(";").forEach(throwValue =>  {

                let redNumber = throwValue.match(/(\d+) red/);
                let blueNumber = throwValue.match(/(\d+) blue/);
                let greenNumber = throwValue.match(/(\d+) green/);

                if(redNumber && redNumber[1]>red) {
                    isGamePossible = false;
                }
                if(blueNumber && blueNumber[1]>blue) {
                    isGamePossible = false;
                }
                if(greenNumber && greenNumber[1]>green) {
                    isGamePossible = false;
                }

            }
        );

        return isGamePossible ? accumulator + index + 1 : accumulator;
    }

    return games.reduce(resolveGame, 0);
}

function resolveDay2Part2(input) {

    const games = input.split("\n");

    const resolveGame = (accumulator, value) => {
        let gameString = value.replace(/Game \d+:/g,"");

        let blueMinimum = 0;
        let redMinimum = 0;
        let greenMinimum = 0;

        gameString.split(";").forEach(throwValue =>  {

                let redNumber = throwValue.match(/(\d+) red/);
                let blueNumber = throwValue.match(/(\d+) blue/);
                let greenNumber = throwValue.match(/(\d+) green/);

                if(redNumber && parseInt(redNumber[1])>redMinimum) {
                    redMinimum = redNumber[1];
                }
                if(blueNumber && parseInt(blueNumber[1])>blueMinimum) {
                    blueMinimum = blueNumber[1];
                }
                if(greenNumber && parseInt(greenNumber[1])>greenMinimum) {
                    greenMinimum = greenNumber[1];
                }
            }
        );

        return accumulator + (blueMinimum * redMinimum * greenMinimum) ;
    }

    return games.reduce(resolveGame, 0);
}

export {resolveDay2, resolveDay2Part2};