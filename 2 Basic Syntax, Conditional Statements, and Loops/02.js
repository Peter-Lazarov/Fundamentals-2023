function rounding(number, rounding){
    if(rounding > 15){
        rounding = 15;
    }
    number = parseFloat(number).toFixed(rounding);
    console.log(1 * number);
}

rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);
