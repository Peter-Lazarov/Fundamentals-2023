function password(input){
    let triesCount = input.shift();

    for (let i = 0; i < triesCount; i++) {
        let currentTry = input[i];
        let indexOfGreater = currentTry.indexOf(">");
        let endIndex = currentTry.length - indexOfGreater;
        let lastLower = currentTry.lastIndexOf("<");

        //check start and stop part
        let start = currentTry.substring(0, indexOfGreater);
        let end = currentTry.substring(lastLower + 1, currentTry.length);
        end = end.split('').reverse().join('');

        if(start == end && endIndex - 1 == lastLower){
            //valid
            let passwordOnly = currentTry.substring(indexOfGreater + 1, lastLower);
            //console.log(passwordOnly);
            let pattern = /([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})/g;
            let passwordObject = passwordOnly.match(pattern);
            if(passwordObject){
                let passwordText = passwordObject[0].replace(/\|/g, "");
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
