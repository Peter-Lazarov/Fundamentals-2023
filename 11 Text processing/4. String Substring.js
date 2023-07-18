function searchForString(searchedWord, sentence){

    let isensitiveWord = searchedWord.toLowerCase()
    let sentenceArray = sentence.toLowerCase().split(' ');

    let isNotFound = true;

    for (const word of sentenceArray) {
        if(word === searchedWord){
            console.log(isensitiveWord);
            isNotFound = false;
            break;
        }
    }

    if(isNotFound){
        console.log(`${isensitiveWord} not found!`);
    }
}

searchForString('javascript', 'JavaScript is the best programming language');
