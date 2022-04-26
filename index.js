function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function increment(n=10) {
    return (n += 1)
}
function decrement(n=10) {
    return (n -= 1)
}
function makeInt(n = 25) {
    return parseInt(n, 10)
}
function preserveDecimal(n) {
    return parseFloat(n)
}