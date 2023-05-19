function login(commands){
    let user = commands[0];
    let userCharArray = user.split("");
    let password = userCharArray.reverse().join("");
    let currentCommand = commands[1];
    if(currentCommand != password){
        let counter = 1;
        while(currentCommand != password){
            if(counter > 3 || currentCommand === undefined){
                console.log(`User ${user} blocked!`)
                return;
            }
            console.log("Incorrect password. Try again.");
            counter++;
            currentCommand = commands[counter];
            
        }
        console.log(`User ${user} logged in.`)
    }else{
        console.log(`User ${user} logged in.`)
    }
}

login(['Acer','login','go','let me in','recA']);
//login(['momo','omom']);
//login(['sunny','rainy', 'cloudy', 'sunny', 'not sunny']);
