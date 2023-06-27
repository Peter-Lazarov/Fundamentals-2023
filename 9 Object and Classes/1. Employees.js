function employee(inputArray){
    
    let person = {};

    for(const element of inputArray){
        person[element] = element.length;
    }

    for (const key in person) {
        console.log(`Name: ${key} -- Personal Number: ${person[key]}`);
    }
}

employee(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);


// Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18

//"Name: {employeeName} -- Personal Number: {personalNum}"
