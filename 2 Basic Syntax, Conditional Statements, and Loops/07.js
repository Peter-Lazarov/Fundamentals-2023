function triangleOfNumbers(n){
    let rowOne = "";
    n++;
    for(let i = 0; i < n; i++){
        for(let repeat = 0; repeat < i; repeat++){
            //console.log(i);
            rowOne += i + " ";
        }
        console.log(rowOne);
        rowOne = "";
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);
