function mergeArrays(inputOne, inputTwo){
    let arrayLength = inputOne.length;
    let newArray = new Array(arrayLength);

    for(let i = 0; i < arrayLength; i++){
        if(i % 2 == 0){
            let someNumber = Number(inputOne[i]) + Number(inputTwo[i]);
            newArray[i] = someNumber;
        }else{
            newArray[i] = inputOne[i] + "" + inputTwo[i];
        }
    }
    
    let firstLine = "";
    newArray.forEach(element => firstLine += element + " - ")
    firstLine = firstLine.slice(0, -2);
    
    console.log(firstLine);

}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
