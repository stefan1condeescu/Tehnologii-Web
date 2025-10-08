function intercalateArrays() {
    let args = arguments;
    let arr1 = args[0];
    let arr2 = args[1];
    let result = [];

    for (let i=0;i<arr1.length;i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}

let a = [1,2,3];
let b = ['a','b','c'];

console.log(intercalateArrays(a, b)); 
