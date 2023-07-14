function users(lineAll){
    
    let companiesObject = {};

    for (const lineCurrent of lineAll) {
        let [company, user] = lineCurrent.split(" -> ");
        if (!companiesObject.hasOwnProperty(company)) {
            companiesObject[company] = [];
        }
        companiesObject[company].push(user);
    }

    let companiesAsArray = Object.entries(companiesObject)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for (const companyArray of companiesAsArray) {
        let companyName = companyArray[0];
        console.log(companyName);
        let usersFromCompany = new Set(companyArray[1]);
        for (const userCurrent of usersFromCompany) {
            console.log(`-- ${userCurrent}`);
        }
    }
}



users(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);
