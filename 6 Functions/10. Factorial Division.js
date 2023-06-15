function factorialDivision(one, two){
    one++;
    two++;

    let resultOne = 1;
    let resultTwo = 1;

    for(let i = 1; i < one; i++){
        resultOne *= i;
    }

    for(let j = 1; j < two; j++){
        resultTwo *= j;
    }

    //console.log(resultOne);
    //console.log(resultTwo);

    console.log((resultOne / resultTwo).toFixed(2));
}

factorialDivision(5,2);
//factorialDivision(6,2);
