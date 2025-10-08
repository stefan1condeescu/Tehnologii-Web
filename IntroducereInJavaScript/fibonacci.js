function fibonacci(n) {
    if (n<0){
        return "invalid index";
    }

    let a = 0, b = 1;

    if (n === 0) {
        return a;
    }
    if (n === 1){ 
        return b;
    }

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

if (process.argv.length < 3) {
    console.log("not enough params");
} else {
    const n = parseInt(process.argv[2]);
    console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
}