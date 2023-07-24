function race(input){
    let pilotsAll = input.shift().split(", ");
    let pilotsObject = {};

    for (const pilotCurrent of pilotsAll) {
        pilotsObject[pilotCurrent] = 0;
    }

    let rowCurrent = input.shift();

    let lettersPattern = /[A-Za-z]/g;
    let digitPattern = /[0-9]/g;

    while (rowCurrent != "end of race") {
        let name = rowCurrent.match(lettersPattern).join("");
        
        if(pilotsObject.hasOwnProperty(name)){
            let digitsAll = rowCurrent.match(digitPattern);
            let distance = 0;
            digitsAll.map(d => distance += Number(d));
            pilotsObject[name] += distance; 
        }
        rowCurrent = input.shift();
        console.log();
    }

    let pilotsArray = Object.entries(pilotsObject).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${pilotsArray[0][0]}`);
    console.log(`2nd place: ${pilotsArray[1][0]}`);
    console.log(`3rd place: ${pilotsArray[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);
