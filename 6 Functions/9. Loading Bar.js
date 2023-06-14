function loadingBar(number){
    let percentage = Math.floor(number / 10);

    
    
    if(percentage < 10){
        let loadingRest = 10 - percentage;
        let line = "";

        for(let i = 0; i < percentage; i++){
            line += "%";
        }

        for(let j = 0; j < loadingRest; j++){
            line += ".";
        }

        console.log(number + "% [" + line + "]");
        console.log("Still loading...");
    }else{
        console.log("100% Complete!");
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
