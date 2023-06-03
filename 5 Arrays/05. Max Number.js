function maxNumber(inputOne){
    let arrayLength = inputOne.length;

    let outPut = "";

    for(let i = 0; i < arrayLength; i++){
        let currentNumber = inputOne[i];
        let isBigger = true;
        for(let j = i + 1; j < arrayLength; j++){
            if(currentNumber <= inputOne[j]){
                isBigger = false;
            }
        }

        if(isBigger){
            outPut += String(currentNumber) + " ";
        }
    }
    console.log(outPut);
}

//maxNumber([1, 4, 3, 2]);
maxNumber([41, 41, 34, 20]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
