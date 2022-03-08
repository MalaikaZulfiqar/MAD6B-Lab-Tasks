function AverageCalculator(...args){
    let sum=0;
    let arr=[];
     for(let i=0;i<args.length;i++){
                sum=sum+args[i];
     }
     let avg=sum/args.length;
     let max=Math.max(...args);
     arr.push(avg);
     arr.push(max);
     return arr;

}

let result=AverageCalculator(12,14,16,18);
console.log(result);