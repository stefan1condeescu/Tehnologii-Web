const array = [1,2,3,4,5]

const reduce = (array,reducer,initialValue) => {
    let accumulator = initialValue
    for(const element of array) {
        accumulator = reducer(accumulator,element)
    }
    return accumulator
}

const sum = reduce (array, (acc, val) => acc + val, 0)
console.log("Sum:", sum)

const product = reduce (array, (acc, val) => acc * val, 1)
console.log("Product:", product)

const concat = reduce (array, (acc,val) => acc.toString() + val.toString(), "")
console.log("Concatenation:", concat)