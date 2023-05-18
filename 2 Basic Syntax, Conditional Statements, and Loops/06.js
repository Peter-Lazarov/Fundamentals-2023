function printAndSum(start, end){
    let numbersAll = "";
    let sum = 0;
    end++;
    for(let i = start; i < end; i++){
        numbersAll += i + " ";
        sum += i;
    }
    console.log(numbersAll);
    console.log("Sum: " + sum);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
