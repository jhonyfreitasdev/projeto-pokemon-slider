let botaoAvancar = document.getElementById('btn-avancar');
let botaoVoltar = document.getElementById('btn-voltar');
let listaPokedex = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

botaoAvancar.addEventListener('click', function(){
    cartaoAnterior = cartaoAtual;
    cartaoAtual++;
    desabilitarSeta();
    esconderCartao();
    mostrarCartao();

});

botaoVoltar.addEventListener('click', function(){
    cartaoAnterior = cartaoAtual;
    cartaoAtual--;
    desabilitarSeta();
    esconderCartao();
    mostrarCartao();
});


function esconderCartao() {
    listaPokedex[cartaoAnterior].classList.remove('selecionado');
};

function mostrarCartao(){
    listaPokedex[cartaoAtual].classList.add('selecionado');
};

function desabilitarSeta(){
    if (cartaoAtual === 0) {
        botaoVoltar.classList.add('desabilitar');
    }else{
        botaoVoltar.classList.remove('desabilitar');
    }

    if (cartaoAtual === listaPokedex.length-1) {
        botaoAvancar.classList.add('desabilitar');
    }else{
        botaoAvancar.classList.remove('desabilitar');
    }
    
};