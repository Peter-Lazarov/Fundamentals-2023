function hogwarts(input){
    let spell = input.shift();
    let actionsCount = input.length;
    
    for (let i = 0; i < actionsCount; i++) {
        let action = input[i];
        
        if(action.indexOf("Abjuration") == 0){
            spell = spell.toUpperCase();
            console.log(spell);
        }else if(action.indexOf("Necromancy") == 0){
            spell = spell.toLowerCase();
            console.log(spell);
        }else if(action.indexOf("Illusion") == 0){
            let parameters = action.split(" ");
            let index = Number(parameters[1]);
            let letter = parameters[2];

            if(spell.length - 1 >= index){
                spell = spell.substring(0, index) + letter + spell.substring(index + 1);
                //console.log(spell);
                console.log("Done!");
            }else{
                console.log("The spell was too weak.");
            }
            
        }else if(action.indexOf("Divination") == 0){
            let parameters = action.split(" ");
            let firstString = parameters[1];
            if(spell.includes(firstString)){
                let secondString = parameters[2];

                spell = spell.replace(new RegExp(firstString, "g"), secondString);
                console.log(spell);
            }
            
        }else if(action.indexOf("Alteration") == 0){
            let parameters = action.split(" ");
            let firstString = parameters[1];
            spell = spell.replace(new RegExp(firstString, "g"), "");
            console.log(spell);
        }else if(action.indexOf("Abracadabra") == 0){
            break;
        }else{
            console.log("The spell did not work!");
        }
    }
}

hogwarts(["rakia",
"Alteration ak",
"Abracadabra"]);

// hogwarts(["TR1GG3R",
// "Necromancy",
// "Illusion 8 m",
// "Illusion 9 n",
// "Abracadabra"])

// hogwarts(["SwordMaster",
// "Target Target Target",
// "Abjuration",
// "Necromancy",
// "Alteration master",
// "Abracadabra"])
