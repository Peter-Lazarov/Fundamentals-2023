function reverseString(inputString){
    let stringLength = inputString.length;
    //console.log(inputString);
    
    let newString = "";
    for(let i = stringLength - 1; -1 < i; i--){
        newString += inputString.charAt(i);
        //console.log(inputString.charAt(i));
    }

    console.log(newString);
}

reverseString("Hello");
