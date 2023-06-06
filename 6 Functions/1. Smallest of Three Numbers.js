function numberSmallest(one, two, three){

    let smallest = 0;

    if(one < two){
        smallest = one;
    }else {
        smallest = two;
    }

    if(smallest > three){
        smallest = three;
    }

    console.log(smallest);
}

numberSmallest(2, 5, 3);
numberSmallest(600,
    342,
    123);
numberSmallest(25,
    21,
    4);
numberSmallest(2,
    2,
    2);
