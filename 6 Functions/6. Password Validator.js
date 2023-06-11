function passwordValidator(word){
    let wordLength = word.length;
    let passwordValid = true;
    
    if(5 < wordLength && wordLength < 11){

    }else{
        console.log("Password must be between 6 and 10 characters");
        passwordValid = false;
    }

    //48 57 Digits
    //65 90 LETTERS
    //97 122 letters
    let digits = 0;
    let onlyLetters = true;
    
    for(let i = 0; i < wordLength; i++){      
        let currentChar = word.codePointAt(i);
        if(47 < currentChar && currentChar < 58){
            digits++;
        }else if((64 < currentChar && currentChar < 91) || (96 < currentChar && currentChar < 123)){
            
        }else{
            onlyLetters = false;
        }
    }

    if(!onlyLetters){
        console.log("Password must consist only of letters and digits");
        passwordValid = false;
    }

    if(digits < 2){
        console.log("Password must have at least 2 digits");
        passwordValid = false;
    }

    if(passwordValid){
        console.log("Password is valid");
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
