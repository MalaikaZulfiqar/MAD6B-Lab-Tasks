let num=Math.floor((Math.random()*10)+1);
let guessNum=6;
if (num==guessNum){
    console.log("You Win!!!");
}
else{
    console.log("Not matched...");
    console.log("The number was: "+num);
}