/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev=0;
    let xCopy = x;     // for Negative numbers case
    x = Math.abs(x);


    while(x>0){
        let rem = x%10;
        rev = (rev *10) + rem;
        x = Math.floor(x/10);
    }
    
    let limit = Math.pow(2,31);  // Limit case
    if(rev < -limit || rev > limit-1) return 0; 

    return (xCopy < 0)  ? -rev:rev;
};