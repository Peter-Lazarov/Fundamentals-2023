function sort(one, two, three){
    let unsorted = [one, two, three];
    
    let n = 3;
    let maxIndex;

    for(let i = n; i >= 0; i--){
        for(let j = n; j > n - i; j--){
            if(unsorted[j] > unsorted[j - 1]){
                let swap = unsorted[j];
                unsorted[j] = unsorted[j - 1];
                unsorted[j - 1] = swap;
            }
        }
    }
    
    unsorted.forEach(element => {
        console.log(element)
    });

}

sort(2, 1, 3);
