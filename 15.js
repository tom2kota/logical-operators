// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

console.log(
    1 && 2 || 3
)

console.log(
    1 && (2 || 3)
)

console.log('---------------')

console.log(
    0 && 2 || 3
)

console.log(
    0 && (2 || 3)
)

console.log('---------------')

console.log(
    0 && 2
)
console.log(
    2 || 3
)