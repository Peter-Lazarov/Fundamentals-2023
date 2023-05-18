function vacantion(people, type, day){
    let price = 0;
    if(type == "Students"){
        if(day == "Friday"){
            price = 8.45;
        }else if(day == "Saturday"){
            price = 9.80;
        }else if(day == "Sunday"){
            price = 10.46;
        }
        if(people > 29){
            price = price - (price * 0.15);
        }
    }else if(type == "Business"){
        if(day == "Friday"){
            price = 10.90;
        }else if(day == "Saturday"){
            price = 15.60;
        }else if(day == "Sunday"){
            price = 16;
        }
        if(people > 99){
            people -= 10;
        }
    }else if(type == "Regular"){
        if(day == "Friday"){
            price = 15;
        }else if(day == "Saturday"){
            price = 20;
        }else if(day == "Sunday"){
            price = 22.50;
        }
        if(9 < people && people < 21){
            price = price - (price * 0.05);
        }
    }

    let sum = people * price;
    console.log(`Total price: ${sum.toFixed(2)}`);
}

vacantion(30,
    "Students",
    "Sunday"
    );
vacantion(40,
    "Regular",
    "Saturday"
    );
