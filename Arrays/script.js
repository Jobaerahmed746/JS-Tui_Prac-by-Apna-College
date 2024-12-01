/*Array ex 1

let marks = [45,56,78,90,23];
console.log(marks[0]=90);
console.log(marks);*/

//Array ex 2

/*let names = ["Jobaer", "Tusha", "Sakib", "Payel","Hamim"];

for(let idx = 0; idx<names.length; idx++){
    console.log(names[idx]);
}

console.log(names[3]="Ahmed");
console.log(names);*/

// for in ex 3

/*let cities = ["Dhaka","Delhi","New Work","London","Washingtong"];

for( let city of cities){
    console.log(city);
}*/

// Array ex 4 average

/*let marks = [85,97,44,37,76,60];

let sum = 0;

for(let val of marks){
    sum+=val;
}

let avg = sum/marks.length;
console.log(`Averages of marks = ${avg}`);*/

//  Array ex 5 offer price

//let items = [250, 645, 300, 900, 50];

/*let idx = 0;
for(let val of items){
    console.log(`value of index ${idx} = ${val}`);
    let offer = val/10;
    items[idx]=items[idx]-offer;
    console.log(`Value after offer = ${items[idx]}`);
    idx++;
}*/


/*for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] = items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
}*/

// slice method use

let arr = [3, 4, 6, 8, 12, 56];

console.log(arr.slice(2,4));










