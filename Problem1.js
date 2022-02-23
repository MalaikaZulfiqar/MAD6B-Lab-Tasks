
function convertArray(number){
     return parseInt(number);

}
let str='23617';
let num=str.toString().split('');
let newArr=num.map(convertArray);
let revArr=newArr.reverse();
let k=4;
console.log(str);
console.log("Kth element of array is from last is: "+revArr[k-1]);