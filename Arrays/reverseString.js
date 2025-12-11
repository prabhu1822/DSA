/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let temp = "";
    let front = 0;
    let last = s.length-1;
    for(let i=0 ; i<s.length ; i++ ){
        if(front < last){
            temp = s[front];
            s[front] = s[last];
            s[last] = temp;
            front++;
            last--;
        }
    }
    
};