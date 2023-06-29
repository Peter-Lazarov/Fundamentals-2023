function town(inputArray){
    
    for (const currentValue of inputArray) {
        
        let currentValueAsArray = currentValue.split(" | ");
        let town = {
            town: currentValueAsArray[0],
            latitude: Number(currentValueAsArray[1]).toFixed(2),
            longtitude: Number(currentValueAsArray[2]).toFixed(2)
        };

        console.log(`{ town: '${town.town}', latitude: '${town.latitude}', longitude: '${town.longtitude}' }`);
    }
}

town(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
//{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
