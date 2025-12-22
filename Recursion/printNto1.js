
function printNto1(num){
    if(num ==0) return;

    console.log(num);
    num--;
    printNto1(num);

}

let num = 10;

printNto1(num);