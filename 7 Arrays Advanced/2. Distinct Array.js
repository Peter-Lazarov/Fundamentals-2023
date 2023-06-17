function distinct(input){
    let newArray = [];

    //foreach in javascript
    for(const a of input){
        if(!newArray.includes(a)){
            newArray.push(a);
        }
    }

    console.log(newArray.join(' '));
}

distinct([1, 2, 3, 4]);
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinct([20, 8, 12, 13, 4, 4, 8, 5]);
