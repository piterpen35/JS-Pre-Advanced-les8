let ask = prompt('Введіть число');
let x = ask;
let result = (x == 0) ? 'Число нуль' : (x % 2 !== 0) ? '- Це число непарне' : '- Це число парне';
console.log(x, result);
