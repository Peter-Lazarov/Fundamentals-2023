function wordsTracker(allWords){
    
    let searchedWords = allWords.shift().split(" ");

    let map = new Map();

    searchedWords.forEach(element => {
        map.set(element, 0);
    });

    for(const word of allWords){
        for(const element of searchedWords){
            if(element === word){
                let currentRepeat = map.get(element);
                map.set(element, currentRepeat + 1);
            }
        }
    }

    let sortedWords = Array.from(map.entries())
    .sort((a,b)=> b[1]-a[1]);

    sortedWords.forEach(element =>{
        console.log(`${element.join(" - ")}`);
    })
}

wordsTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);
