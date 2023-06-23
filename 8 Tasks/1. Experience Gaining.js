function experience(input){
    let neededExperience = input.shift();
    let battleCount = input.shift();
    let checkExperience = true;
    let experienceAll = 0;

    let currentBattle = 1;

    for(let i = 0; i < battleCount; i++){
        let experienceCurrent = input[i];

        if(currentBattle % 3 == 0){
            experienceCurrent = experienceCurrent + (experienceCurrent * 0.15);
        }

        if(currentBattle % 5 == 0){
            experienceCurrent = experienceCurrent - (experienceCurrent * 0.10);
        }

        if(currentBattle % 15 == 0){
            experienceCurrent = experienceCurrent + (experienceCurrent * 0.05);
        }

        experienceAll += experienceCurrent;

        if(experienceAll >= neededExperience){
            console.log(`Player successfully collected his needed experience for ${currentBattle} battles.`);
            checkExperience = false;
            break;
        }

        currentBattle++;
    }

    if(checkExperience){
        console.log(`Player was not able to collect the needed experience, ${(neededExperience - experienceAll).toFixed(2)} more needed.`);
    }
}

//experience([500, 5, 50, 100, 200, 100, 30]);
experience([500, 5, 50, 100, 200, 100, 20]);
experience([400, 5, 50, 100, 200, 100, 20]);
