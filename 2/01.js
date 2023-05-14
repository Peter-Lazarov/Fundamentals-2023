function ages(age){
    if(-1 < age && age < 3){
        console.log("baby");
    }else if(2 < age && age < 14){
        console.log("child");
    }else if(13 < age && age < 20){
        console.log("teenager");
    }else if(19 < age && age < 66){
        console.log("adult");
    }else if(65 < age){
        console.log("elder");
    }else{
        console.log("out of bounds"); 
    }
}

ages(50);
