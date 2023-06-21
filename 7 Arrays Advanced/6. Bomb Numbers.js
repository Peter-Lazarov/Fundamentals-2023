function numbers(inputOne, inputTwo){

    let inputOneLength = inputOne.length;
    let searchedNumber = inputTwo[0];
    let numberPower = inputTwo[1];

    let indexOfNumber = inputOne.indexOf(searchedNumber);

    while(indexOfNumber > -1){
        let left = indexOfNumber - numberPower;
        if(left < 0){
            left = 0;
        }

        let right = indexOfNumber + numberPower;
        if(right >= inputOneLength){
            right = inputOneLength - 1;
        }
        let deleteCount = right - left + 1;

        inputOne.splice(left, deleteCount);

        indexOfNumber = inputOne.indexOf(searchedNumber);
    }
    let all = 0;
    inputOne.forEach(number => all += number);
    //console.log(inputOne);
    console.log(all);
}

numbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
numbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
numbers([1, 7, 7, 1, 2, 3], [7, 1]);
numbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
