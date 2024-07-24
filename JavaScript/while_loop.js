// var i = 0;

// while (i < 5) {
//     console.log(i)
//     i++
// }

// alert("Loop encerrado!")

var numeroTabuada = prompt("Tabuada ");
var i = 1;

while (i < 11) {
     if ((i * numeroTabuada) % 2 === 0){
    console.log(numeroTabuada + ' x ' + i + ' = ' +(i * numeroTabuada) + 
               ' => PAR');
    
}else{
     console.log(numeroTabuada + ' x ' + i + ' = ' +(i * numeroTabuada) + 
               ' => ÍMPAR');
    } 
    i++;
}