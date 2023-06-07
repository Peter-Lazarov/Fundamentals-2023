function subtract(one, two, three){
    function sum(first, second){

        let sumOfTwo = first + second;
    
        return sumOfTwo;
    }

    let searchedNumber = sum(one, two) - three;
    
    console.log(searchedNumber);
}

subtract(23,
    6,
    10);
subtract(1,
    17,
    30);
subtract(42,58,
    100);
