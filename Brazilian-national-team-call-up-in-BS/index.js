// 1 . Pega o elemente do carrosel pelo ID 
const myCarousel =  document.getElementById('meuCarrossel')

//2. Adiciona um ouvinte a constante "Um evento" que dispara quando o slide mudar
myCarousel.addEventListener('slide.bs.carousel', event => {

    // 'event.relatedTarget' é o slide (div) que está entrando (o novo)
const proximoSlide = event.relatedTarget;

// 3. Pega o conteúdo dos atributos 'data-' do slide que vai entrar
const novoTitulo = proximoSlide.getAttribute('data-titulo');
const novaPosicao = proximoSlide.getAttribute('data-posicao');
const novaDescricao = proximoSlide.getAttribute('data-desc');

document.getElementById('display-titulo').innerText = novoTitulo;
document.getElementById('display-descricao').innerText = novaDescricao;

document.getElementById('display-posicao').innerText = novaPosicao
const elementoPosicao = document.getElementById('display-posicao')
if(elementoPosicao){
    elementoPosicao.innerText = novaPosicao;
}
document.getElementById('display-descricao').innerText = novaDescricao;

});