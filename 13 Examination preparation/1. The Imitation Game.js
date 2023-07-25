function game(input){
    let text = input.shift();
    let commandString = input.shift();
    
    while(commandString != "Decode"){
        let commandArray = commandString.split("|");
        let currentCommand = commandArray[0];
        if(currentCommand == "ChangeAll"){
            let seachWhat = commandArray[1];
            while(text.includes(seachWhat)){
                text = text.replace(seachWhat, commandArray[2]);
            }
        }else if(currentCommand == "Insert"){
            text = text.substring(0, commandArray[1]) + commandArray[2] + text.substring(commandArray[1]);
        }else if(currentCommand == "Move"){
            let letters = text.substring(0, commandArray[1]);
            text = text.substring(commandArray[1]);
            text = text + letters;
        }

        commandString = input.shift();
        
    }
    console.log(`The decrypted message is: ${text}`);
}

game(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);
