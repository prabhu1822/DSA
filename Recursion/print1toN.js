
function print1toN(num){

    let x=num;
    console.log(num);
    x=x-1;

    if(x>num) return;
    print1toN(x);
}

// let n=10;
print1toN(10);