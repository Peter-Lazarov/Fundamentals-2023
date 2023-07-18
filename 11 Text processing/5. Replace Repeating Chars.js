function replaceRepeatingString(stringGiven){

    for (let i = 0; i < stringGiven.length; i++) {
        let currentCharacter = stringGiven.charAt(i);
        let doubledCharacterForReplace = currentCharacter + currentCharacter;
        while(stringGiven.indexOf(doubledCharacterForReplace) > -1){
            stringGiven = stringGiven.replace(doubledCharacterForReplace, currentCharacter);
        }
        //console.log(stringGiven);
    }
    console.log(stringGiven);
}

replaceRepeatingString('aaaaabbbbbcdddeeeedssaa');
