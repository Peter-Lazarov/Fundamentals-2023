function months(currentMonth){

    let month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

    if(currentMonth > 0 && currentMonth < 13){
        console.log(month[currentMonth - 1]); 
    }else{
        console.log("Error!");
    }
}

months(2);
