function friendList(input){
    let friendsAll = input.shift().split(", ");
    let blackListed = [];
    let errorListed = [];

    let commandLine = input.shift().split(' ');
    while(commandLine != "Report"){
        let action = commandLine[0];

        if(action == "Blacklist"){
            let human = commandLine[1];
            let searchForName = friendsAll.indexOf(human);

            if(searchForName > -1){
                blackListed.push(human);
                console.log(`${human} was blacklisted.`);
                friendsAll[searchForName] = "Blacklisted";
            }else{
                console.log(`${human} was not found.`);
            }
        }else if(action == "Error"){
            let index = commandLine[1];
            let friendsCount = friendsAll.length;
            
            if(-1 < index && index < friendsCount){
                let human = friendsAll[index];
                if(human != "Blacklisted" && human != "Lost"){
                    console.log(`${human} was lost due to an error.`);
                    errorListed.push(human);
                    friendsAll[index] = "Lost";
                }
            }
        }else if(action == "Change"){
            let index = commandLine[1];
            let friendsCount = friendsAll.length;
            
            if(-1 < index && index < friendsCount){
                let human = friendsAll[index];
                if(human != "Blacklisted" && human != "Lost"){
                    let newName = commandLine[2];
                    console.log(`${human} changed his username to ${newName}.`);
                    friendsAll[index] = newName;
                }
            }
        }

        commandLine = input.shift().split(' ');
    }

    console.log(`Blacklisted names: ${blackListed.length}`);
    console.log(`Lost names: ${errorListed.length}`);
    console.log(friendsAll.join(' '));
}


// William was lost due to an error.
// Mike changed his username to Mike123.
// Blacklisted names: 0
// Lost names: 1
// Mike123 John Eddie Lost

// Maya was not found.
// John was lost due to an error.
// Blacklisted names: 0
// Lost names: 1
// Mike Lost Eddie William


//friendList(["Mike, John, Eddie","Blacklist Mike","Error 0","Report"]);
//friendList(["Mike, John, Eddie, William","Error 3","Error 3","Change 0 Mike123","Report"]);
friendList(["Mike, John, Eddie, William","Blacklist Maya","Error 1","Change 4 George","Report"]);
