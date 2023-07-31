function follower(input){
    let line = input.shift();

    let allFollowers = new Map();

    while(line != "Log out" || input.legth == 0){
        let [command, name, count] = line.split(": ");
        if(command == "New follower"){
            if(!allFollowers.has(name)){
                allFollowers.set(name,[]);
                allFollowers.get(name).push(0);
                allFollowers.get(name).push(0);
            }
        }else if(command == "Like"){
            if(allFollowers.has(name)){
                let likesBefore = Number(allFollowers.get(name)[0]);
                allFollowers.get(name)[0] = likesBefore + Number(count);
            }else{
                allFollowers.set(name,[]);
                allFollowers.get(name).push(Number(count));
                allFollowers.get(name).push(0);
            }
        }else if(command == "Comment"){
            if(allFollowers.has(name)){
                let commentsBefore = allFollowers.get(name)[0];
                allFollowers.get(name)[0] = commentsBefore + 1;
            }else{
                allFollowers.set(name,[]);
                allFollowers.get(name).push(0);
                allFollowers.get(name).push(1);
            }
        }else if(command == "Blocked"){
            if(allFollowers.has(name)){
                allFollowers.delete(name);
            }else{
                console.log(`${name} doesn't exist.`);
            }
        }
        line = input.shift();
    }

    console.log(`${allFollowers.size} followers`);
    for (const follower of allFollowers) {
        console.log(`${follower[0]}: ${follower[1][0] + follower[1][1]}`);
    }
}

follower(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"]);

follower(["Blocked: Amy",

"Comment: Amy",

"New follower: Amy",

"Like: Tom: 5",

"Like: Ellie: 5",

"Log out"])
