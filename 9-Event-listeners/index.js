
document.querySelector('button').addEventListener('click', function(){
    alert('Você clicou no botão!')
})

// const mousehandler =() => {
//     document.querySelector('h1').classList.add('header')
// }

const mousehandler =() => {
    document.querySelector('h1').classList.toggle('header')
} 
// aqui e para quando passaro mouse ele aparecer a cor quem afz isso e o 'toggle'

document.querySelector('h1').addEventListener('mouseenter', mousehandler)
document.querySelector('h1').addEventListener('mouseout', mousehandler)

document.querySelector('input').addEventListener('keydown', function(event){
    console.log(event.target.value)
})