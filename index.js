// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]




function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
    
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
    const cats_1 = [...cats,name];
    return cats_1;
}

function prependCat(name) {
    const cat_2 = [name,...cats];
    return cat_2;

}

function removeLastCat(name) {
    const cats_3 = cats.slice(0,cats.length-1);
    return cats_3;
}

function removeFirstCat(name) {
    const cats_4 = cats.slice(1);
    return cats_4;

}