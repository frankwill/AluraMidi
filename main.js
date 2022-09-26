const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (seletorAudio) {
    // querySelector busca no document(html) o seletor #som_tecla_pom e acessa(.) o atribulto play da tag de audio.
    const elemento = document.querySelector(seletorAudio); 

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento não encontrado');
    }
    
}



for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    // acessando cada elemento dessa list utilizando os indices entre [].
    tecla.onclick = function () {
        tocaSom(idAudio);
    } 

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa'); 
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}