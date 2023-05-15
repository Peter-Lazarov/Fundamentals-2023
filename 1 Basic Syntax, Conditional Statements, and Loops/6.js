function theatre(weekday, age){
    let price = 0;
    if(0 <= age && age <= 18){
        if(weekday == "Weekday"){
            price = 12;
        }else if(weekday == "Weekend"){
            price = 15;
        }else if(weekday == "Holiday"){
            price = 5;
        }
    }else if(18 < age && age <= 64){
        if(weekday == "Weekday"){
            price = 18;
        }else if(weekday == "Weekend"){
            price = 20;
        }else if(weekday == "Holiday"){
            price = 12;
        }
    }else if(64 < age && age <= 122){
        if(weekday == "Weekday"){
            price = 12;
        }else if(weekday == "Weekend"){
            price = 15;
        }else if(weekday == "Holiday"){
            price = 10;
        }
    }else{
        console.log("Error!");
        return;
    }
    console.log(price + "$");
}

theatre("Holiday", 15);
