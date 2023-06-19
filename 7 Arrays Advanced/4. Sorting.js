function sorting(input){
    let inputLength = input.length;
    let min_idx;

    for(let i = 0; i < inputLength - 1; i++){
        min_idx = i;
        for(let j = i + 1; j < inputLength; j++){
            if(input[j] < input[min_idx]){
                min_idx = j;
            }
        }

        if(min_idx != i){
            let work = input[min_idx];
            input[min_idx] = input[i];
            input[i] = work;
        }
    }

    let half = Math.floor(inputLength / 2);
    //console.log(half);
    let arrangedArray = [];

    for(let k = 0; k < half; k++){
        arrangedArray.push(input.pop());
        arrangedArray.push(input.shift());
    }
    //console.log(inputLength % 2);
    if(inputLength % 2 > 0){
        arrangedArray.push(input.pop());
    }

    let all = "";
    arrangedArray.forEach(element => all += element + " ");
    console.log(all);
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 100]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
