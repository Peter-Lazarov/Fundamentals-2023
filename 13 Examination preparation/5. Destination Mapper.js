function destinationMapper(input) {

    let pattern = /([\=]|[\/])(?<places>[A-Z][A-Za-z]{2,})\1/g;
    let points = 0;
    let destinations = "";

    let foundDestinations = input.match(pattern);

    //console.log(foundDestinations);

    if(foundDestinations){
        foundDestinations.forEach(element => {
            element = element.replace(/\=|\//g, "");
            //console.log(element);
            points += element.length;
            if(destinations.length > 0){
                destinations += ", ";
            }
            destinations += element;
        });
    }
    console.log(`Destinations: ${destinations}`);
    console.log(`Travel Points: ${points}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
