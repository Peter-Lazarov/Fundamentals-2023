function password(input){
    let triesCount = input.shift();

    for (let i = 0; i < triesCount; i++) {
        let currentTry = input[i];

        //console.log(passwordOnly);
        let pattern = />([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})</g;
        let passwordObject = currentTry.match(pattern);
        if(passwordObject){
            let passwordOnly = passwordObject[0];
            let indexOfStart = currentTry.indexOf(passwordOnly);

            //check start and stop part
            let start = currentTry.substring(0, indexOfStart);
            let end = currentTry.substring(currentTry.length - indexOfStart, currentTry.length);

            passwordOnly = passwordOnly.replace(">","").replace("<","");
            
            if(start == end){
                let passwordText = passwordOnly.replace(/\|/g, "");
                console.log(`Password: ${passwordText}`);
            }else{
                console.log("Try another password!");
            }
        }else{
            console.log("Try another password!");
        }
    }
}

// password(["3",
// "##>00|no|NO|!!!?<###",
// "##>123|yes|YES|!!!<##",
// "$$<111|noo|NOPE|<<>$$"]);

password(["5",

"<>>111|mqu|BAU|mqu<<>",

"()>111!aaa!AAA!^&*<()",

"o>088|abc|AAA|***<o",

"asd>asd|asd|ASD|asd<asd",

"*>088|zzzz|ZzZ|123<*"]);
