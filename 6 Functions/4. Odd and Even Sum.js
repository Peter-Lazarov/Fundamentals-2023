function oddAndEven(number){
    let sumEven = 0;
    let sumOdd = 0;

    let numberAsString = String(number);
    let numberAsStringLength = numberAsString.length;

    for(let i = 0; i < numberAsStringLength; i++){
        let currentDigit = parseInt(numberAsString[i]);

        if(currentDigit % 2 == 0){
            sumEven += currentDigit;
        }else{
            sumOdd += currentDigit;
        }
        
        
        
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEven(1000435);
oddAndEven(3495892137259234);
