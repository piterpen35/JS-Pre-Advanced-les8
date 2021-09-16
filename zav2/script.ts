let ask : any = prompt('Введіть число');
let x: number = ask;
let result = (x == 0) ? 'Число нуль' : (x % 2 !==0) ? '- Це число непарне' : '- Це число парне';
console.log(x, result);