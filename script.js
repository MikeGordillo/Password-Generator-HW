// Assignment Code

var enter;
var confirmNumber;
var confirmSymbols;
var confirmUppercase;
var confirmLowercase;

symbols = ["!","@","#","$","%","^","&","*","()","+","="];

number = [0,1,2,3,4,5,6,7,8,9];

alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"];
space = [];
var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = writePassword();
  document.getElementById("password").placeholder =ps;
}); 


function writePassword() {
  enter = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
       
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        confirmNumber = confirm("Including Numbers?");
        confirmSymbols = confirm("Including Symbols?");
        confirmUppercase = confirm("Including Uppercase letters?");
        confirmLowercase = confirm("Including Lowercase letters?");
    };

    if (!confirmSymbols && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
  
    else if (confirmSymbols && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = symbols.concat(number, alpha, alpha2);
    }
    else if (confirmSymbols && confirmNumber && confirmUppercase) {
        choices = symbols.concat(number, alpha2);
    }
    else if (confirmSymbols && confirmNumber && confirmLowercase) {
        choices = symbols.concat(number, alpha);
    }
    else if (confirmSymbols && confirmLowercase && confirmUppercase) {
        choices = symbols.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    else if (confirmSymbols && confirmNumber) {
        choices = symbols.concat(number);

    } else if (confirmSymbols && confirmLowercase) {
        choices = symbols.concat(alpha);

    } else if (confirmSymbols && confirmUppercase) {
        choices = symbols.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    else if (confirmSymbols) {
        choices = symbols;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

  var password = [];

   
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}

var ps = password.join("");
UserInput(ps);
return ps;
}

function UserInput(ps) {
document.getElementById("password").passwordText = ps;

}






  



