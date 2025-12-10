let num = 1999;

let count = 0;
let numStr = num+"";

for(let i=0;i<numStr.length;i++){
    if(num/10 != 0){
        count++;
    }
}

console.log(count);