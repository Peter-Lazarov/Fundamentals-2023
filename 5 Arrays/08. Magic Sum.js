function pairSum(input, searchedSum){
    let arrayLength = input.length;

    for(let i = 0; i < arrayLength - 1; i++){
        let currentNumber = input[i];
        for(let j = i + 1; j < arrayLength; j++){
            let nextNumber = input[j];
            if(currentNumber + nextNumber == searchedSum){
                console.log(`${currentNumber} ${nextNumber}`);
            }
        }
    }
}

pairSum([1, 7, 6, 2, 19, 23],8);
pairSum([14, 20, 60, 13, 7, 19, 8],27);
pairSum([1, 2, 3, 4, 5, 6],6);
