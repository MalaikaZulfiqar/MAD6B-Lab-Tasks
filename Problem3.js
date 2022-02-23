function evenNum(number){

    
    if (number%2==0){
        return  number;
    }
}

let string='23617';
console.log("Number:"+string);
let nwear=string.split('');
console.log(nwear);
let numbers=[];
for(let i=0;i<nwear.length;i++){
    numbers.push(parseInt(nwear[i]));

}

console.log(numbers);


let sm=numbers.filter(evenNum);

console.log("Even numbers of arrays are: "+sm);

let sumofnum=0;

for(let i=0;i<sm.length;i++){

sumofnum=sumofnum+sm[i];
}
console.log("Sum of even numbers of arrays: "+sumofnum)