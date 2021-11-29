// exercise 1st
function sum(arr) {
    let total = 0;

    const d = arr.reduce(function(accumulator, elem, i, array){
        if(accumulator >= 20)
            total = accumulator;
        return accumulator + elem;
    });

    return total;
}
sum(3,5,12,2,4);

// exercise 2nd
const newArray = function getNewArray(arr) {
    const newArray = arr.filter(
        elem => elem.length >= 5 && elem.includes('a')
    );
    
    return newArray;
};
getNewArray(["asdfc","add","ss"]);


