function resolveDay3(input) {
    const lignes = input.split("\n");
    let sumResult = 0;

    lignes.forEach((ligne, indexLigne) => {
        let nombres = [...ligne.matchAll(/(\d+)/g)];

        nombres.forEach((nombre) => {

            let startIndexX = Math.max(nombre.index - 1, 0);
            let endIndexX = Math.min(nombre.index + nombre[0].length + 1, ligne.length -1);
            let startIndexY = Math.max(indexLigne - 1, 0);
            let endIndexY = Math.min(indexLigne + 1, lignes.length - 1);

            let concatenatedAdjacentChars = "";

            for(let y = startIndexY; y <= endIndexY; y++) {
                concatenatedAdjacentChars += lignes[y].substring(startIndexX, endIndexX).replaceAll(/\.|\d/g, '');
            }

            if(concatenatedAdjacentChars !== "") {
                sumResult += parseInt(nombre[0]);
            }

        })

    });

    return sumResult;

}

function resolveDay3Part2(input) {

    const lignes = input.split("\n");
    let gearRatioSumResult = 0;

    lignes.forEach((ligne, indexLigne) => {
        let gears = [...ligne.matchAll(/(\*)/g)];

        gears.forEach((gear) => {

            // console.log(gear);
            let startIndexY = Math.max(indexLigne - 1, 0);
            let endIndexY = Math.min(indexLigne + 1, lignes.length - 1);

            let concatenatedAdjacentChars = "";

            for(let y = startIndexY; y <= endIndexY; y++) {

                let startIndexX = Math.max(gear.index - 1, 0);
                let endIndexX = Math.min(gear.index + 2, ligne.length -1);

                //console.log("checking : "+lignes[y].substring(startIndexX, endIndexX));

                while(lignes[y].charAt(startIndexX).match(/\d/)) { startIndexX--}
                while(lignes[y].charAt(endIndexX - 1).match(/\d/)) { endIndexX++}

                //console.log("extracting : "+lignes[y].substring(startIndexX, endIndexX));

                concatenatedAdjacentChars += lignes[y].substring(startIndexX, endIndexX);
            }

            let numbersAdjacentToGear = [...concatenatedAdjacentChars.matchAll(/\d+/g)];

            if(numbersAdjacentToGear.length > 1) {
                gearRatioSumResult += parseInt(numbersAdjacentToGear[0][0]) * parseInt(numbersAdjacentToGear[1][0]);
            }
        })
    });

    return gearRatioSumResult;
}

export {resolveDay3, resolveDay3Part2}