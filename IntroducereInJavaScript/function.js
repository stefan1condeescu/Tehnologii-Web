const concatStr = (arr) => arr.join('');

const args = process.argv.slice(2);

console.log(concatStr(args));