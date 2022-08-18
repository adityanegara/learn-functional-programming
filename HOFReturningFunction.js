const calculate = (operation) => {
    switch (operation) {
        case "ADD":
            return (a, b) => {
                return a + b;
            };
        case "SUBTRACT":
            return (a, b) => {
                return a - b;
            }
    }
}
console.log(calculate('ADD')(2, 100));
console.log(calculate('SUBTRACT')(230, 100));