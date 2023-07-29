function needForSpeed(input) {
    let carsCount = Number(input.shift());

    let allCarsMap = new Map();

    for (let i = 0; i < carsCount; i++) {
        let [car, milage, fuel] = input.shift().split("|");
        allCarsMap.set(car, []);
        allCarsMap.get(car).push(Number(milage));
        allCarsMap.get(car).push(Number(fuel));
    }

    for (const line of input) {
        if(line != "Stop"){
            let parameters = line.split(" : ");
            let carModel = parameters[1];
            let currentCar = allCarsMap.get(carModel);

            if(line.indexOf("Drive") == 0){
                let carKilometersAdded = Number(parameters[2]);
                let carFuelExausted = Number(parameters[3]);

                let testDrive = currentCar[1] - carFuelExausted;

                if(testDrive < 0){
                    console.log("Not enough fuel to make that ride");
                }else{
                    currentCar[0] += carKilometersAdded;
                    currentCar[1] -= carFuelExausted;
                    console.log(`${carModel} driven for ${carKilometersAdded} kilometers. ${carFuelExausted} liters of fuel consumed.`);
                }

                if(currentCar[0] >= 100000){
                    console.log(`Time to sell the ${carModel}!`);
                    allCarsMap.delete(carModel);
                }

            }else if(line.indexOf("Refuel") == 0){
                let carFuelAdded = Number(parameters[2]);
                let carFuelInReservoar = currentCar[1];
                let fuelSum = carFuelInReservoar + carFuelAdded;

                if(fuelSum > 75){
                    currentCar[1] = 75;
                    console.log(`${carModel} refueled with ${75 - carFuelInReservoar} liters`);
                }else{
                    currentCar[1] = fuelSum;
                    console.log(`${carModel} refueled with ${carFuelAdded} liters`);
                }
            }else if(line.indexOf("Revert") == 0){
                let carKilometersRemoved = Number(parameters[2]);
                currentCar[0] -= carKilometersRemoved;

                if(currentCar[0] <= 10000){
                    currentCar[0] = 10000;
                }else{
                    console.log(`${carModel} mileage decreased by ${carKilometersRemoved} kilometers`);
                }
            }
        }
    }

    for (const element of allCarsMap) {
        console.log(`${element[0]} -> Mileage: ${element[1][0]} kms, Fuel in the tank: ${element[1][1]} lt.`);
    }
    
    //console.log(allCarsMap);
}

needForSpeed(['3',
'Audi A6|38000|62',
'Mercedes CLS|11000|35',
'Volkswagen Passat CC|45678|5',
'Drive : Audi A6 : 543 : 47',
'Drive : Mercedes CLS : 94 : 11',
'Drive : Volkswagen Passat CC : 69 : 8',
'Refuel : Audi A6 : 50',
'Revert : Mercedes CLS : 500',
'Revert : Audi A6 : 30000',
'Stop']);
