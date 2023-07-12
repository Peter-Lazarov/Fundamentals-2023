function occurrences(allWordsString){
    let allWordsArray = allWordsString.toLowerCase().split(" ");

    let wordsAllObject = {};

    for (const word of allWordsArray) {
        if(!wordsAllObject.hasOwnProperty(word)){
            wordsAllObject[word] = 0;
        }
        wordsAllObject[word]++;
    }

    let oddElements = Object.entries(wordsAllObject)
    .filter(double => double[1] % 2 !== 0)
    .sort((a, b) => b[1] - a[1]);

    let result = '';
    for (const array of oddElements) {
        result += `${array[0]} `;
    }
    console.log(result);
}

//occurrences('Java C# Php PHP Java PhP C# C#');
occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
