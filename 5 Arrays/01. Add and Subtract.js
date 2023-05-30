function addAndSubtract(input){
    let arrayLength = input.length;
    let newArray = new Array(arrayLength);
    let sumOfNormalArray = 0;
    let sumOfModifiedArray = 0;

    for(let i = 0; i < arrayLength; i++){
        let currentNumber = input[i];
        if(currentNumber % 2 == 0){
            newArray[i] = currentNumber + i;
        }else{
            newArray[i] = currentNumber - i;
        }

        sumOfNormalArray += currentNumber;
        sumOfModifiedArray += newArray[i];
    }
    let firstLine = "[ ";
    newArray.forEach(element => firstLine += element + ", ")
    firstLine = firstLine.slice(0, -2) + ' ]';
    
    console.log(firstLine);
    console.log(sumOfNormalArray);
    console.log(sumOfModifiedArray);
}

addAndSubtract([5, 15, 23, 56, 35]);
