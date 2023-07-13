function piccolo(allCars){
    let parking = new Map();
    
    for (const line of allCars) {
        let [action, carNumber] = line.split(", ");
        if(action == "IN"){
            parking.set(carNumber);
        }else{
            parking.delete(carNumber);
        }
    }

    let carAllNumbers = Array.from(parking.keys()).sort((a, b) => a.localeCompare(b));

    if (parking.size == 0) {
        console.log("Parking Lot is Empty");
    }else{
        for (const numbers of carAllNumbers) {
            console.log(numbers);
        }
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
