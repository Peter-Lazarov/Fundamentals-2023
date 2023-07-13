function occurrences(allWordsString){
    let allWordsArray = allWordsString.toLowerCase().split(" ");

    let wordsAllObject = new Map();

    for (const word of allWordsArray) {
        if(!wordsAllObject.has(word)){
            wordsAllObject.set(word, 1);
        }else{
            let currentRepeat = wordsAllObject.get(word);
            wordsAllObject.set(word, currentRepeat + 1);
        }
    }

    let searchedElements = Array.from(wordsAllObject)
    .filter(pair => pair[1] % 2 != 0);

    let result = '';
    for (const array of searchedElements) {
        result += `${array[0]} `;
    }
    console.log(result);
}

occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
