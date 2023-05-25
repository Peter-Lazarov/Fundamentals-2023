function digitsSum(digits){
    let asString = String(digits);
    let stringAsArray = asString.split("");
    let sumAll = 0;

    stringAsArray.forEach(element => sumAll += Number(element));
    console.log(sumAll);
}

digitsSum(245678);
