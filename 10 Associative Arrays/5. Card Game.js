function cards(cardsAll){

    let cardGameObject = {};

    for (const lineCurrent of cardsAll) {
        let [user, cards] = lineCurrent.split(": ");
        if (!cardGameObject.hasOwnProperty(user)) {
            cardGameObject[user] = [];
        }
        cardGameObject[user] = cardGameObject[user].concat(cards.split(", "));
    }

    let cardGameArray = Object.entries(cardGameObject);

    for (const userCurrent of cardGameArray) {
        let cardsInHandString = userCurrent[1].join(", ");
        cardsInHandString = cardsInHandString
        .replace(/["J"]/g, 11)
        .replace(/["Q"]/g, 12)
        .replace(/["K"]/g, 13)
        .replace(/["A"]/g, 14);

        let cardsInHandSet = new Set(cardsInHandString.split(", "));
        
        //(S -> 4, H-> 3, D -> 2, C -> 1)
        let sumOfCards = 0;
        for (const cardCurrent of cardsInHandSet) {
            let power = cardCurrent.charAt(cardCurrent.length - 1);
            switch (power) {
                case "S":
                    sumOfCards += Number(cardCurrent.replace("S", "")) * 4;
                    break;
                case "H":
                    sumOfCards += Number(cardCurrent.replace("H", "")) * 3;
                    break;
                case "D":
                    sumOfCards += Number(cardCurrent.replace("D", "")) * 2;
                    break;
                case "C":
                    sumOfCards += Number(cardCurrent.replace("C", "")) * 1;
                    break;
                default:
                    break;
            }
        }
        console.log(`${userCurrent[0]}: ${sumOfCards}`);
    }
}

cards(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);

cards(['John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);
