function nextDay(year, month, day){
    //`${day.toString()} ${month.toString()} ${year.toString()}`
    //let currentDate = Date.parse;

    if(year < 100){
        year = 1900 + year;
    }

    day = day + 1;
    let event = new Date(`${month} ${day} ${year} 00:00:00 GMT`);

    console.log(`${event.getFullYear()}-${event.getMonth() + 1}-${event.getDate()}`);
    //console.log(event.toISOString());
}

nextDay(2023, 1, 25);
//nextDay(1, 1, 1);
//nextDay(2020, 3, 24);
