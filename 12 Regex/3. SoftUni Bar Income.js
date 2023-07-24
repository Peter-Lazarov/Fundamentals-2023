function barIncome(input){
    
    let currentRow = input.shift();

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[\d]+.\d*)\$/;

    //let allCustomers = [...currentRow.matchAll(pattern)];
    let sumForDay = 0;

    while (currentRow != "end of shift") {
        let currentCustomer = currentRow.match(pattern);
        //console.log(currentCustomer.groups);

        if(currentCustomer != null){
            let deal = Number(currentCustomer.groups.quantity) * Number(currentCustomer.groups.price);
            sumForDay += deal;

            console.log(`${currentCustomer.groups.name}: ${currentCustomer.groups.product} - ${deal.toFixed(2)}`);
        }

        currentRow = input.shift();
    }
    console.log(`Total income: ${sumForDay.toFixed(2)}`);
}


barIncome(['%Valid%<Valid>valid|10|valid20$',
'end of shift']
);
