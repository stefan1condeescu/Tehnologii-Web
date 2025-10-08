function copyArray(numbers){
    let result=[];
    for (let i=0;i<numbers.length;i++) {
        result.push(numbers[i]);
    }
    return result;
}
console.log(copyArray([10, 20, 30, 40]));