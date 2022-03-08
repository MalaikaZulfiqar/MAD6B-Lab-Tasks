function sandwich_calculator(bread,cheese){
    let no=Math.floor(bread/2);
            if (bread>2){
              
              console.log("Total number of sandwich that can be made without cheese: "+no);
            }
            else{
              console.log("Bread is not sufficent to make the bread");
            }
            if (bread > 2 && cheese<=Math.floor(bread/2)){
                return cheese;
            }
           else if(cheese==1){
                return 1;
            }
            else if(cheese>Math.floor(bread/2)){
              return Math.floor(bread/2);
            }
         }
              
let bread=14;
let cheese=3;
let res=sandwich_calculator(bread,cheese);
console.log("Total number of cheese sandwich can be made with cheese: "+res);


