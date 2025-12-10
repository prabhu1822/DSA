function countDigits(num){
    if(num == 0 ) return 1; // 0 value corner case

    // Converting negative number to positive number
    Math.abs(num);
    let count = 0;
    while(num > 0){
        num = Math.floor(num/10);  // math.floor() is for rounding down the number
        count++;
    }
    return count;
}

let num = 982112;

let result = countDigits(num);

console.log(result);
