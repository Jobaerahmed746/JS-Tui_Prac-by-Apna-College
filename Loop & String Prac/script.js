/* Practice 01

for (let num = 0; num<=100; num++){
    if(num%2!==0){
        console.log(num);
    };
}

// Practice 02

let gameNum = 24;
let userNum = prompt("Enter the guess number :");

while(userNum != gameNum){
     userNum = prompt("You entered wrong number.Guess again:")
}

console.log("Congratulations, you entered the right number");*/

// Srting check

//let str = "Jobaer Ahmed";

//console.log(str[5]);

//Object create

/*let obj = {
    firstName : "Jobaer",
    lastName : "Tusha",
};

let tem = `${obj.firstName} loves ${obj.lastName} `
console.log(tem);*/

/*console.log(obj.firstName + " loves so much " + obj.lastName);

let str = "jobar ahmed";

 let string = str.toUpperCase();

console.log(str);
console.log(string);*/


/*Slice use

let str = "jobaerahmed"
console.log(str);*/

/*replace use

let str1 = "jobaer"

console.log(str1.replace("er","yer"));*/

let fullName = prompt("Enter your full Name without space: ")

let userName = "@" + fullName + fullName.length;
console.log(userName);
