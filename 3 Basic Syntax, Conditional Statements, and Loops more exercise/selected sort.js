function sort(one, two, three){
    let unsorted = [one, two, three];
    
    let n = 3;
    let minIndex;

    for(let i = 0; i < n; i++){
        if(i < n-1){
            minIndex = i;
            for(let j = i + 1; j < n; j++){
                if(j < n && unsorted[j] < unsorted[minIndex]){
                    minIndex = j;
                }else{
                    let swap = unsorted[minIndex];
                    unsorted[minIndex] = unsorted[i];
                    unsorted[i] = swap;
                }
            }
        }
    }

    unsorted.forEach(element => {
        console.log(element)
    });

}

sort(2, 1, 3);
