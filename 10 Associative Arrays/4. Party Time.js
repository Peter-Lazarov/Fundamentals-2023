function partyTime(allVisitors){
    let currentLine = allVisitors.shift();
    let list = new Map();
    
    while (currentLine != "PARTY") {
        list.set(currentLine);

        currentLine = allVisitors.shift();
    }

    for (const visitor of allVisitors) {
        list.delete(visitor);
    }

    let missingVisitors = Array.from(list.keys())
    .sort((a, b) => a.itemCommodity > b.itemCommodity);

    console.log(missingVisitors.length);

    for (const visitor of missingVisitors) {
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
