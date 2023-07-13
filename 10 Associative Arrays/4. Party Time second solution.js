function partyTime(allVisitors){
    let currentLine = allVisitors.shift();
    let vipList = [];
    let regularList = [];

    while (currentLine != "PARTY") {
        let firstCharacter = currentLine.charAt(0);

        if(isNaN(firstCharacter)){
            regularList.push(currentLine);
        }else{
            vipList.push(currentLine);
        }

        currentLine = allVisitors.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (const visitor of allVisitors) {
        let indexOfGuest = allGuests.indexOf(visitor);
        if(indexOfGuest > -1){
            allGuests.splice(indexOfGuest, 1);
        }
    }

    console.log(allGuests.length);

    for (const visitor of allGuests) {
        console.log(visitor);
    }
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']);

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);
