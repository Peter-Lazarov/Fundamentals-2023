function wordsTracker(allWords){
    
    let searchedWords = allWords.shift().split(" ");

    let map = new Map();

    for (const search of searchedWords) {
        map.set(search, 0);
        for (const word of allWords) {
            if(search === word){
                let currentRepat = map.get(search);
                map.set(search, currentRepat + 1);
            }
        }
    }

    let sortedWords = Array.from(map.entries())
    .sort((a,b) => (b[1]-a[1]));

    for (const element of sortedWords) {
        console.log(`${element[0]} - ${element[1]}`);
    }
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
