function equalSum(input){
    let arrayLength = input.length;
    let sumBefore = 0;
    let sumAfter = 0;

    for(let i = 0; i < arrayLength; i++){
        for(let j = i - 1; -1 < j; j--){
            sumBefore += input[j];
        }
        for(let k = i + 1; k < arrayLength; k++){
            sumAfter += input[k];
        }
        if(sumBefore == sumAfter){
            console.log(i);
            return;
        }
        sumBefore = 0;
        sumAfter = 0;
    }
    console.log("no");
}

equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
