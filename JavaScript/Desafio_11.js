function areaCircunferencia (raio){
    return 3.14 * raio ** 2;
}

var raio = prompt("Entre com o valor do raio: ")

var res = areaCircunferencia(raio)

console.log(res)