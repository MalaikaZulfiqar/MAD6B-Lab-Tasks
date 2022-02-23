let string='23617';
console.log("NUmber:"+string);
let nwear=string.split('');

let numbers=[];
  for(let i=0;i<nwear.length;i++){
        numbers.push(parseInt(nwear[i]));

  }
console.log(numbers);
  let sumofnum=0;

  for(let i=0;i<numbers.length;i++){

    sumofnum=sumofnum+numbers[i];
  }

  console.log("2+3+6+1+7="+sumofnum);