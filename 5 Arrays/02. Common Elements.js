function elementsCommon(inputOne, inputTwo){
    let arrayLength = inputOne.length;

    for(let i = 0; i < arrayLength; i++){
        let currentNumber = inputOne[i];

        for(let j = 0; j < arrayLength; j++){
            if(currentNumber === inputTwo[j]){
                console.log(inputTwo[j]);
            }
        }
    }
}

elementsCommon(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
