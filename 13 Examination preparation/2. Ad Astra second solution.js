function foodQuantity(input){

    let allFoodString = input.shift();

    let pattern = /([\#]|[\|])(?<product>[a-zA-Z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let allFoodObjects = allFoodString.matchAll(pattern);

    let caloriesSum = 0;

    let foodShelf = [];

    for (const currentFood of allFoodObjects) {
        let product = currentFood[2];
        let date = currentFood[3];
        let calories = currentFood[4];
        caloriesSum += Number(calories);
        foodShelf.push(`Item: ${product}, Best before: ${date}, Nutrition: ${calories}`)
    }

    caloriesSum = Math.floor(caloriesSum/2000);
    console.log(`You have food to last you for: ${caloriesSum} days!`);

    for (const food of foodShelf) {
        console.log(food);
    }
}

foodQuantity(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
foodQuantity(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
foodQuantity(['Hello|#Invalid food#19/03/20#450|$5*(@']);
