function occurrences(allWordsString){
    let allWordsArray = allWordsString.toLowerCase().split(" ");

    let map = new Map();
    allWordsArray.sort((a,b) => a.localeCompare(b));

    let wordsCount = allWordsArray.length;

    for (let i = 0; i < wordsCount; i++) {
        let currentWord = allWordsArray[i];
        map.set(currentWord, 1);
 
        for (let j = i + 1; j < wordsCount; j++) {
            if(currentWord == allWordsArray[j]){
                let currentRepat = map.get(currentWord);
                map.set(currentWord, currentRepat + 1);
                if(j + 1 == wordsCount){
                    i = wordsCount;
                }
            }
            else{
                i = j - 1;
                j = wordsCount;
            }
        }
    }
    
    let result = "";
    
    let entries = Array.from(map.entries()).sort((a,b)=> b[1]-a[1]);
    
    for (const word of entries) {
        let value = word[1];
        if(value % 2 != 0){
            result += word[0] + " ";
        }
    }

    console.log(result);
}

occurrences('Cake IS SWEET is Soft CAKE sweet Food');
occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
