const factorial = (number) => {
    if (number < 0) {
        return -1;
    } else if (number == 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

const countDown = (count) => {
    console.log(count);
    const newNumber = count - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

console.log(factorial(5));
countDown(10);