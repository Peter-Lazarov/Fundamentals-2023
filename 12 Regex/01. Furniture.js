function furniture(input){
    let pattern = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;

    let totalSum = 0;

    console.log("Bought furniture:");

    for (const element of input) {
        let result = element.match(pattern);

        if(result){
            let items = result.groups.name;
            let price = Number(result.groups.price);
            let count = Number(result.groups.quantity);

            totalSum += price * count;
            console.log(items);
        }
    }

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
