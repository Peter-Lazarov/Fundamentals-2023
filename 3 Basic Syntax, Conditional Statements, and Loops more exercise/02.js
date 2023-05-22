function digitsNames(numbers){
    let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    let numbersAsString = numbers.toString();
    let charLast = numbersAsString.charAt(numbersAsString.length - 1);

    console.log(digits[parseInt(charLast)]);
}

digitsNames(512);
