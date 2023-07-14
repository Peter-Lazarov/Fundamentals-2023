function miner(resourcesAll){
    let resourcesObject = {};

    let resourcesAllLength = resourcesAll.length;

    for (let i = 0; i < resourcesAllLength; i = i + 2) {
        let resourceType = resourcesAll[i];
        let resourceQuantity = resourcesAll[i + 1];
        if(resourcesObject.hasOwnProperty(resourceType)){
            resourcesObject[resourceType] = Number(resourcesObject[resourceType]) + Number(resourceQuantity);
        }else{
            resourcesObject[resourceType] = resourceQuantity;
        }
    }

    for (const key in resourcesObject) {
        console.log(`${key} -> ${resourcesObject[key]}`);
    }
}

miner(['Gold',
'155',
'Silver',
'10',
'Copper',
'17']);

miner(['gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);
