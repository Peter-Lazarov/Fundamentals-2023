function dictonary(linesAll){

    let dictonaryWhole = {};

    for (const lineCurrent of linesAll) {
        let dictonaryRow = JSON.parse(lineCurrent);
        
        for (let key in dictonaryRow) {
            dictonaryWhole[key] = dictonaryRow[key];
        }

        //dictonaryWhole[dictonaryRow[key]] = dictonaryRow[1];
    }

    let sortedKeys = Object.keys(dictonaryWhole).sort().reduce((accumulator, key) => {

        accumulator[key] = dictonaryWhole[key];
        
        return accumulator;
        }, {});

    for (const key in sortedKeys) {
        console.log(`Term: ${key} => Definition: ${sortedKeys[key]}`);
    }
}

dictonary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);
