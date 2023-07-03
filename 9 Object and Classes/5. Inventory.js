function inventory(linesAll){

    let heroesAll = [];

    for (const lineCurrent of linesAll) {
        let parametersAll = lineCurrent.split(" / ");

        let hero = {
            name: parametersAll[0],
            level: Number(parametersAll[1]),
            items: parametersAll[2]
        }

        heroesAll.push(hero);
    }

    heroesAll.sort((l, h) => l.level - h.level);

    //console.table(moviesAllArray);

    for (const element of heroesAll) {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    }
}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

inventory(['Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara']);
