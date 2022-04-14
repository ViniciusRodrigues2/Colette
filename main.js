let corDeFundo = document.querySelector('.denger');
let text = document.querySelector('.conteudo-header');
let logo = document.querySelector('.logo');
let white = document.getElementById('white');
function mudarCor(){
    corDeFundo.addEventListener('click',()=>{
        document.body.style.backgroundColor = '#1B1F24';
        document.body.style.color = 'white';
        logo.style.color = '#A23437'
    });
}
mudarCor();
function voltar(){
    white.addEventListener('click',()=>{
        let cor = 'black'
        document.body.style.backgroundColor = 'white';
        document.body.style.color = cor;
        logo.style.color = cor
    });
}
voltar();