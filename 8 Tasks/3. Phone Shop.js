function phone(input){
    let phoneList = input.shift().split(', ');

    let command = input.shift().split(" - ");

    while(command != "End"){

        let action = command[0];
        let phone = command[1];

        if(action == "Add"){
            let indexOfPhone = phoneList.indexOf(phone);
            if(indexOfPhone == -1){
                phoneList.push(phone);
            }
        }else if(action == "Remove"){
            let indexToDelete = phoneList.indexOf(phone);
            if(indexToDelete > -1){
                phoneList.splice(indexToDelete, 1);
            }
        }else if(action == "Bonus phone"){
            let phones = phone.split(':');
            let oldPhone = phones[0];
            let newPhone = phones[1];
            let searchedPhoneIndex = phoneList.indexOf(oldPhone);

            if(searchedPhoneIndex > -1){
                phoneList.splice(searchedPhoneIndex + 1, 0, newPhone);
            }
        }else if(action == "Last"){
            let indexToDelete = phoneList.indexOf(phone);
            if(indexToDelete > -1){
                phoneList.splice(indexToDelete, 1);
                phoneList.push(phone);
            }
        }else if(action == "End"){
            break;
        }

        command = input.shift().split(" - ");
    }

    console.log(phoneList.join(', '));
}

//phone(["SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"]);
//phone(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]);
//phone(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]);
phone(["M65, S65, M65", "Last - M65", "End"]);
