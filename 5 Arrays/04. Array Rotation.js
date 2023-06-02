function arrayRotation(inputOne, rottations){
    let arrayLength = inputOne.length;
    let newArray = new Array(arrayLength);

    let a = 43;
    let b = 4;
    let c = a % b;
    let restRotations = rottations;

    if(rottations > arrayLength){
        restRotations = rottations % arrayLength;
    }
    
    for(let i = 0; i < arrayLength; i++){
        if(i >= restRotations){
            newArray[i - restRotations] = inputOne[i];
        }else{
            newArray[i + arrayLength - restRotations] = inputOne[i];
        }
    }

    let firstLine = "";

    newArray.forEach(element => firstLine += element + " ")
    firstLine = firstLine.slice(0, -1);
    
    console.log(firstLine);
}

arrayRotation([51, 47, 32, 61, 21], 2);
//arrayRotation([2, 4, 15, 31], 5);
