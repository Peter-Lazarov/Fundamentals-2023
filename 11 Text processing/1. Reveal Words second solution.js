function words(searchedWordsString, sentence){
    let searchedWordsArray = searchedWordsString.split(", ");

    let searchedWordsArrayLength = searchedWordsArray.length;

    for (const word of searchedWordsArray) {
        let wordMasked = '*'.repeat(word.length);
        sentence = sentence.replace(wordMasked, word);
    }
 
    console.log(sentence);
}

words('great', 'softuni is ***** place for learningnew programming languages');
words('great, learning', 'softuni is ***** place for ******** new programming languages');
