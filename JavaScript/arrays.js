// var lista = [1, 2, 3, 4];
// var lista2 = ['Thiago', 'Pedro', 'João'];
// var lista3 = [1, 'Pedro', true]

var frutas = ['maça', 'banana', 'laranja', 'uva']

console.log(frutas[0]);

console.log(frutas[2]);

frutas[2] = 'kiwi'

console.log(frutas)

frutas.push('melancia');
console.log(frutas)

frutas.splice(1, 2)
console.log(frutas)

var ultimaFruta = frutas.pop();
console.log(ultimaFruta)
console.log(frutas)

console.log(frutas.length);