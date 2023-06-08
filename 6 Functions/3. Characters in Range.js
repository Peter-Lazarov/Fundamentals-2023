function character(one, two){
    let characterOne = one.charCodeAt(0);
    let characterTwo = two.charCodeAt(0);

    if(characterOne > characterTwo){
        let work = characterTwo;
        characterTwo = characterOne;
        characterOne = work;
    }

    let endString = "";
    for(let i = characterOne + 1; i < characterTwo; i++){
        endString += String.fromCodePoint(i) + " ";
    }
    console.log(endString);
}

//character('a','d');
//character('#',':');
character('C','#');
