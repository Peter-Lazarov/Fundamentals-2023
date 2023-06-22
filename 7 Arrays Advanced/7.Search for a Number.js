function searchForNumber(inputOne, inputTwo){

   
    
    let useCount = inputTwo[0];
    let deleteCount = inputTwo[1];
    let searchedNumber = inputTwo[2];

    let partOfInputOne = inputOne.splice(0, useCount);
    //console.log(partOfInputOne);
    partOfInputOne.splice(0, deleteCount);
    //console.log(partOfInputOne);
    let inputOneLength = inputOne.length;

    let occuringCount = 0;
    for(let i = 0; i < inputOneLength; i++){
        if(partOfInputOne[i] == searchedNumber){
            occuringCount++;
        }
    }

    console.log(`Number ${searchedNumber} occurs ${occuringCount} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
