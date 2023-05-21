function pyraid(size, increment){
    let stoneAll = 0;
    let marbleAll = 0;
    let lapizAll = 0;
    let goldAll = 0;

    let level = 0;
    let height = 1;

    let area = 0;
    let perimeter = 0;

    while(size > 2){
        area = size * size;
        perimeter = size + size + size + size - 4;
        stoneAll += ((area - perimeter) * increment);
        
        level++;
        if(level % 5 == 0){
            lapizAll += (perimeter * increment);
        }else{
            marbleAll += (perimeter * increment);
        }

        size -= 2;
    }

    level++;

    if(size == 1){
        perimeter = 1;
    }else{
        perimeter = size + size + size + size - 4;
    }

    goldAll = perimeter * increment;
    height = level * increment;

    console.log("Stone required: " + Math.ceil(stoneAll));
    console.log("Marble required: " + Math.ceil(marbleAll));
    console.log("Lapis Lazuli required: " + Math.ceil(lapizAll));
    console.log("Gold required: " + Math.ceil(goldAll));
    console.log("Final pyramid height: " + Math.floor(height));
}

pyraid(11,1);
// console.log("");
//pyraid(11, 0.75);
// console.log("");
// pyraid(12, 1);
// console.log("");
// pyraid(23, 0.5);

//pyraid(12,0.1);
