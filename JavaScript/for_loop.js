// for (var i = 0; i < 5; i++){
//     console.log(i);
// }

var numeroTabuada = prompt("Qual tabuada: ")

for (var i =1; i < 11; i++){
    if ((i * numeroTabuada) % 2 === 0){
    console.log(numeroTabuada + ' x ' + i + ' = ' +(i * numeroTabuada) + 
               ' => PAR');
    
}else{
     console.log(numeroTabuada + ' x ' + i + ' = ' +(i * numeroTabuada) + 
               ' => ÍMPAR');
    }    
}