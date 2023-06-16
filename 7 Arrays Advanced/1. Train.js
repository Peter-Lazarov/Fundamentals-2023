function train(input){
    let inputLength = input.length;
    let wagonsAllString = input[0].split(' ');

    let maxNumberPerWagon = input[1];
    let wagonsAll = wagonsAllString.map(p => Number(p));
    
    for(let i = 2; i < inputLength; i++){
        let currentLine = input[i];
        if(currentLine.includes("Add")){
            let passengersOnly = currentLine.substring(3);
            wagonsAll.push(Number(passengersOnly));
        }else{
            let wagonsAllLenght = wagonsAll.length;
            for(let j = 0; j < wagonsAllLenght; j++){
                let passengersToAdd = Number(currentLine);
                let calculate = wagonsAll[j] + passengersToAdd;
                if(calculate <= maxNumberPerWagon){
                    wagonsAll[j] = calculate;
                    break;
                }
            }
        }
    }

    let result = "";
    wagonsAll.forEach(p => result = result + p + " ");
    console.log(result);
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);
