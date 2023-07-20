function cutAndReverse(stringGiven){

    let length = stringGiven.length;

    let firstHalf = stringGiven.substring(0, length/2);
    let secondHalf = stringGiven.substring((length/2), length);
    
    let firstHalfArray = firstHalf.split("").reverse();
    let secondHalfArray = secondHalf.split("").reverse();

    console.log(firstHalfArray.join(""));
    console.log(secondHalfArray.join(""));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
