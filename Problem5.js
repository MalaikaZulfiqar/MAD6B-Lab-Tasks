let str="Hellow World";
str=str.toLowerCase();
for (let i=0;i<str.length;i++){
let pos=str.charAt(i);
if(pos=='a'||pos=='e'||pos=='i'||pos=='o'||pos=='u'){
    console.log("The position of left most vowel is :"+(i+1));
    break;
}
}

let num=1234;
let number=num;
let  rev=0,remainder;
while(number>0){
     remainder=number%10;
     number=parseInt(number/10);
     rev=rev*10+remainder;
}

console.log("Reverse of "+num+ " is "+rev);