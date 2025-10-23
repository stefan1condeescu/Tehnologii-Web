const sortObjects = (arr,key) => {
    return arr.sort((a,b) => {
        if(a[key] < b[key]) {
            return -1;
        }
        else return 1;
    })
}

const laptops = [
    {
        brand: 'Dell',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Apple',
        processor: 'M1',
        ram: 16
    },
    {
        brand: 'HP',
        processor: 'i7',
        ram: 12
    },
    {
        brand: 'Lenovo',
        processor: 'i3',
        ram: 4
    }
]

const result = sortObjects(laptops, 'processor')
console.log(result)

const result2 = sortObjects(laptops, 'ram')
console.log(result2)
