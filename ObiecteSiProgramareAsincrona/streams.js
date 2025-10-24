class Stream{
    #value;
    #nextValue;
    static #count =0;
    constructor(seed, nextValue){
        this.#value = seed;
        this.#nextValue = nextValue;
        Stream.#count++;
    }
    get value(){
        return this.#value;
    }
    get next(){
        this.#value=this.#nextValue(this.#value)
        return this.#value;
    }

    static get count(){
        return Stream.#count;
    }
}

class ConstantStream extends Stream{
    constructor(value){
        super(value, value => value);

    }
}

class NextIntegerStream extends Stream{
    constructor(){
        super(0, value => value + 1);   

    }
}
const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();
for(let i=0; i<5; i++){
    console.log(`Constant[${i}] = ${constant.next}`);
    console.log(`NextInteger[${i}] = ${nextInteger.next}`);
}
console.log(Stream.count);

const anotherConstant = new ConstantStream(5);
console.log(Stream.count);

class Weapon{
    constructor(description){
        this.description = description;
    }

    fire(){
        console.log(`${this.description} is firing`)
    }
}

const w0 = new Weapon(`pew pew laser`)
w0.fire();