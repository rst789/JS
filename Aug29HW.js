function byteSize(string) {
    return new Blob([string]).size;
}

console.log(byteSize("Hello World!!!"));

function cap(string) {
    return string.toUpperCase();
}

console.log(cap('The quick brown fox jumps over the lazy dog.'));

function timeCalc(date1, date2) {
    return (date1 - date2) / 31556952000;
}

console.log(timeCalc(new Date('2022-8-29'), (new Date('1998-1-30'))));

function eqlFunc(x, y) {
    return (JSON.stringify(x) === JSON.stringify(y));
}

let x = {a: [1,{e: 2}],b: [3],c: 'test'};
let y = {a: [1,{e: 2}],b: [3],c: 'test'};

console.log(eqlFunc(x,y));