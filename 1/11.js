function sumOfOdd(n){
    let sum = 0;
    let number = 1;
    n++;

    for(let i = 1; i < n; i++){
        console.log(number);
        sum += number;
        number += 2;
    }
    console.log("Sum: " + sum);
}

sumOfOdd(5);
