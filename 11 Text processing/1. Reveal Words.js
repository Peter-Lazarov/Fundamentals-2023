function words(searchedWordsString, sentence){
    let searchedWordsArray = searchedWordsString.split(", ");

    let searchedWordsArrayLength = searchedWordsArray.length;

    let result = "";

    let startIndex = 0;

    for (let i = 0; i < searchedWordsArrayLength; i++) {
        let currentWord = searchedWordsArray[i];
        let indexOfWord = sentence.indexOf("*");
        
        if(indexOfWord > -1){
            let partBeforeWord = sentence.substring(startIndex, indexOfWord);

            let partAfterWord = sentence.substring(indexOfWord + currentWord.length, sentence.length);
            result = partBeforeWord + currentWord + partAfterWord;
            sentence = result;
        }
    }
    console.log(result);

}

words('great', 'softuni is ***** place for learningnew programming languages');
words('great, learning', 'softuni is ***** place for ******** new programming languages');
