function maxSequence(input){
    let arrayLength = input.length;
    let repeatMaxCount = 0;
    let repeatMaxString = "";

    for(let i = arrayLength - 1; -1 < i; i--){
        let currentNumber = input[i];
        let repeatCount = 0;
        let repeatString = String(currentNumber) + " ";

        for(let j = i - 1; -1 < j; j--){
            let nextNumber = input[j];
            if(currentNumber == nextNumber){
                repeatCount++;
                repeatString += String(nextNumber) + " ";
            }else{
                break;
            }
        }
        
        if(repeatMaxCount <= repeatCount){
            repeatMaxString = repeatString;
            repeatMaxCount = repeatCount;
        }
    }

    console.log(repeatMaxString);
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
