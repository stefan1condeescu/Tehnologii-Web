function powGen() {
    const cache = {}; 

    const pow = (base, exp) => {
        const key = `${base}^${exp}`; 

        if (key in cache) {
            console.log('found ' + key);
            return cache[key];
        }

        console.log('calculated ' + key);

        if (exp === 0) {
            cache[key] = 1;
        } else if (exp === 1) {
            cache[key] = base;
        } else {
            cache[key] = base * pow(base, exp - 1); 
        }

        return cache[key];
    };

    return pow;
}

const p = powGen();
console.log(p(2, 3)); 
console.log(p(2, 5)); 
console.log(p(2, 3)); 
