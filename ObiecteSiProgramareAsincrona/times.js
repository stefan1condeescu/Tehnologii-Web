Number.prototype.times = function(callback){
    const n = Math.floor(this)
    for(let i = 0; i < n; i++){
        callback(i)
    }
}
const sayHello = () => console.log("Hello!");
5..times(sayHello);

(3).times(i => console.log(`Executia #${i + 1}`));