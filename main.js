const input = require('readline-sync');

let metReqs = false;
let counter = 0;

do {
    counter++;
    let password = input.question("Enter your password: ");
    if (password.length > 8) { // if password is longer than 8 characters
        for (char of password) {
            if (char >= 'A' && char <= 'Z') { // (character comparison) if password contains uppercase letter
                for (char of password) {
                    if (char >= '0' && char <= '9') { // (character comparison) if password contains number 
                        metReqs = true;
                        break; 
                    }
                }
            } 
        }
    } else {
        break;
    }
} while (counter < 1);

if (metReqs) {
        console.log("Password validation successful!");
} else {
    console.log("Your password does not meet the requirements.");
}
