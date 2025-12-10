let num = 123;
let rev = 0;

while(num > 0){
    rem=num%10;
    num = Math.floor(num/10);
    rev = (rev*10 )+ rem;
}

console.log(rev);

