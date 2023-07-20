function splitterPascalCase(stringGiven){

    let wordsAll = [];
    let index = 0;

    for (let i = 1; i < stringGiven.length; i++) {
        if(stringGiven.charCodeAt(i) >= 65 && stringGiven.charCodeAt(i) <= 90){
            wordsAll.push(stringGiven.substring(index, i));
            index = i;
        }
    }

    wordsAll.push(stringGiven.substring(index, stringGiven.length));

    console.log(wordsAll.join(', '));
}

splitterPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
