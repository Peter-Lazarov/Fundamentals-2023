function palindrome(array){
    let arrayLength = array.length;
    
    for(let i = 0; i < arrayLength; i++){      
        let currentDigitAsString = String(array[i]);
        let currentDigitAsStringLength = currentDigitAsString.length;
        
        let middleOfDigit = Math.floor(currentDigitAsStringLength / 2);
        currentDigitAsStringLength--;
        let isPalindrome = true;
        
        for(let j = 0; j < middleOfDigit; j++){
            let left = currentDigitAsString[j];
            let right = currentDigitAsString[currentDigitAsStringLength - j];
            if(left != right){
                isPalindrome = false;
                console.log(isPalindrome);
                break;
            }
        }

        if(isPalindrome){
            console.log(isPalindrome);
        }
    }
}

// palindrome([123,323,421,121]);
// palindrome([32,2,232,1010]);
palindrome([0,65,8.8]);
