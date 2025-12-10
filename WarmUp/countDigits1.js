let count=0;
let num = 123454569276;

while(num>0){
    num = Math.floor(num/10);
    count++;
}

console.log(count);