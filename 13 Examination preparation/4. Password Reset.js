function passwordReset(input) {
    let passwordGiven = input.shift();

    let commandParser = {
        "TakeOdd": (passwordParsed) => {
            return [...passwordParsed].filter((value, index) => {
                return index % 2 !== 0
            }).join("");
        },
        "Cut": (passwordParsed, index, length) => {
            index = Number(index);
            length = Number(length);

            let partOfText = passwordParsed.substring(index, index + length);
            return passwordParsed.replace(partOfText, "");
        },
        "Substitute": (passwordParsed, one, two) => {
            if (passwordParsed.includes(one)) {
                return passwordParsed.replace(new RegExp(one, "g"), two);
            } else {
                console.log("Nothing to replace!");
                return passwordParsed;
            }
        }

        //"Cut {index} {length}"
    }

    input.forEach(line => {
        if (line != "Done") {
            let [command, ...tokens] = line.split(" ");
            let oldPassword = passwordGiven;
            passwordGiven = commandParser[command](passwordGiven, ...tokens);

            if (oldPassword != passwordGiven) {
                console.log(passwordGiven);
            }
        }
    });

    console.log(`Your password is: ${passwordGiven}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
