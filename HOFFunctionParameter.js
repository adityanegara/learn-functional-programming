
//Before Higher Order Function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const filterOdd = (arr) => {
    const fiteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            filteredArr.push(arr[i]);
        }
    }
    return fiteredArr;
}

const filterEven = (arr) => {
    const fiteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            filteredArr.push(arr[i]);
        }
    }
    return fiteredArr;
}

//banyak penulisan kode yang berulang. Padahal cuma logika filter
//Higher Order Function

const isOdd = (number) => {
    return number % 2 != 0;
}

const isEven = (number) => {
    return number % 2 == 0
}

const filterFunction = (arr, callback) => {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
}

console.log(filterFunction(arr, isOdd));
console.log(filterFunction(arr, isEven));