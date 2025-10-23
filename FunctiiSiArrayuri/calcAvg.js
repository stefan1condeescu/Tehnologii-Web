const arr = [10, 20, 30, 40, 50];

const calcAcg = (numbers) =>{
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0)
    return sum / numbers.length;
}

console.log(calcAcg(arr));