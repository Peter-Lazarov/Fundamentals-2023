function hTag(sentence){

    while(sentence.indexOf("# ") > -1){
        sentence = sentence.replace("# ", "");
    }
    let wordsAll = sentence.split(" ");

    for (const word of wordsAll) {
        if(word[0] === '#' && word.length > 1){
            let wordAsArray = word.split('');
            let letterCounter = 0;
            for (const currentLetter of wordAsArray) {
                if(!isNaN(currentLetter)){
                    break;
                }else{
                    letterCounter++;
                }
            }

            if(letterCounter == word.length){
                console.log(word.replace("#", ""));
            }
        }
    }
}

hTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
