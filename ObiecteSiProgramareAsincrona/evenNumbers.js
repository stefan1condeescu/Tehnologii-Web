class EvenStream{
    #value;
    constructor(initialValue){
        this.#value = (initialValue % 2 === 0) ? initialValue : initialValue +1;

    }

    next (){
        const current = this.#value;
        this.#value +=2;
        return current;
    }
}

const stream = new EvenStream(1);
const stream2 = new EvenStream(10);
for(let i=0; i<5; i++){
    console.log(`Stream1[${i}] = ${stream.next()}`);
    console.log(`Stream2[${i}] = ${stream2.next()}`);
}