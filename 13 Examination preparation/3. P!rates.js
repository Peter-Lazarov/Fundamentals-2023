function pirates(input){

    let citiesAll = [];

    let citiesPattern = /(?<city>[A-Za-z\s]+)\|\|(?<population>\d+)\|\|(?<gold>\d+)/;
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let line = input[i];
        if(line === "Sail"){
            for (let index = i+1; index < inputLength; index++) {
                line = input[index];
                let resultsOfActions = line.split("=>");
                let targetedCity = resultsOfActions[1];
                let actualCityIndex = citiesAll.findIndex(x => x.city === targetedCity);

                if(line.includes("Plunder")){
                    citiesAll[actualCityIndex].population -= Number(resultsOfActions[2]);
                    citiesAll[actualCityIndex].gold -= Number(resultsOfActions[3]);
                    console.log(`${targetedCity} plundered! ${resultsOfActions[3]} gold stolen, ${resultsOfActions[2]} citizens killed.`);

                    if(citiesAll[actualCityIndex].population == 0 || citiesAll[actualCityIndex].gold == 0){
                        citiesAll.splice(actualCityIndex,1);
                        console.log(`${targetedCity} has been wiped off the map!`);
                    }
                }else if(line.includes("Prosper")){
                    if(Number(resultsOfActions[2]) > 0){
                        citiesAll[actualCityIndex].gold += Number(resultsOfActions[2]);
                        console.log(`${resultsOfActions[2]} gold added to the city treasury. ${targetedCity} now has ${citiesAll[actualCityIndex].gold} gold.`);
                    }else{
                        console.log("Gold added cannot be a negative number!");
                    }
                }
                else{
                    i = index - 1;
                    break;
                }
            }
        }else if(line === "End"){
            if(citiesAll.length > 0){
                console.log(`Ahoy, Captain! There are ${citiesAll.length} wealthy settlements to go to:`);
                for (const cityObject of citiesAll) {
                    console.log(`${cityObject.city} -> Population: ${cityObject.population} citizens, Gold: ${cityObject.gold} kg`);
                }
            }else{
                console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
            }
        }else{
            //read cities line by line with regex pattern
            let cityFromRegex = line.match(citiesPattern);
            let cityName = cityFromRegex.groups.city;
            
            //check into array if current city is already added
            let currentCity = citiesAll.find(x => x.city === cityName)

            if(!currentCity){
                let newCity = {
                    city: cityName,
                    population: Number(cityFromRegex.groups.population),
                    gold: Number(cityFromRegex.groups.gold)
                }
                citiesAll.push(newCity);
            }else {
                currentCity.population += Number(cityFromRegex.groups.population);
                currentCity.gold += Number(cityFromRegex.groups.gold);
            }
        }

    }
}

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);
