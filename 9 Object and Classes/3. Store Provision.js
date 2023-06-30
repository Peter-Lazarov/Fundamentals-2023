function store(currentProducts, deliveryProducts){
    let productsLength = currentProducts.length / 2;
    
    let storeProducts = {};

    for (let i = 0; i < productsLength; i++){
        let product = currentProducts.shift();
        storeProducts[product] = Number(currentProducts.shift());
    }

    let deliveryLength = deliveryProducts.length / 2;
    for (let j = 0; j < deliveryLength; j++){
        let productDelivered = deliveryProducts.shift();
        
        if(!storeProducts.hasOwnProperty(productDelivered)){
            storeProducts[productDelivered] = 0;
        }

        storeProducts[productDelivered] += Number(deliveryProducts.shift());
    }

    //console.log(storeProducts);

    for (const key in storeProducts) {
        console.log(`${key} -> ${storeProducts[key]}`);
    }
}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], 
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
