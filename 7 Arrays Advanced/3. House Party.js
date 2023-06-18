function houseParty(input){
    let partyList = [];

    //foreach in javascript
    for(const people of input){
        let currentHumanName = people.split(' ')[0];
        
        if(people.includes("is not")){
            if(partyList.includes(currentHumanName)){
                let index = partyList.indexOf(currentHumanName);
                delete partyList[index];
            }else{
                console.log(`${currentHumanName} is not in the list!`);
            }
        }else{
            if(!partyList.includes(currentHumanName)){
                partyList.push(currentHumanName);
            }else{
                console.log(`${currentHumanName} is already in the list!`);
            }
        }
    }

    partyList.forEach(human => console.log(human));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);
