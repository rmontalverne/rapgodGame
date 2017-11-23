/*  Neste javascript engloba funções referentes ao funcionamente do jogo, tais como, cartas geradas que serão utilizadas na rodada, animação das cartas saindo deck e indo a mão
    do jogador, função de sleep, embaralhamento de cartas e funções de drag and drop para a jogabilidade*/
/*AUTORES:
        Mateus Talzzia Diogo,                               15147861
        Paulo Vinicius Martimiano de Oliveira,              15149313
        Rafael Mont’Alverne de Souza,                       15078371 
*/
/*OBS:  */

// Embaralha o deck e gera uma mão para o jogador e o computador
function geraMao() {

    cartasDeckJogador = shuffle(cartasDeckJogador);
    for (var i = 0; i < 4; i++) {
        cartasMaoJogador[i] = cartasDeckJogador[i];
    }

    cartasDeckIa = shuffle(cartasDeckIa);
    for (var i = 0; i < 4; i++) {
        cartasMaoIa[i] = cartasDeckIa[i];
    }

}

// Realiza a animação da carta miniatura do jogador
function loop(carta) {
    var ctx, canvas;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    setTimeout(function() {


        ctx.clearRect(0, 0, 500, 500);
        if (carta == 1) {
            anim1++;
            if (anim1 < 235) {
                ctx.drawImage(rapper1, 250 - anim1, 15, 30, 120);
                loop(carta);
            } else {
                carta = 0;
                document.getElementById("carta1").style.display = "inline";

            }

        } else if (carta == 2) {
            anim2++;
            if (anim2 < 175) {
                ctx.drawImage(rapper2, 250 - anim2, 15, 30, 120);
                loop(carta);
            } else {
                carta = 0;
                document.getElementById("carta2").style.display = "inline";

            }

        } else if (carta == 3) {
            anim3++;
            if (anim3 < 115) {
                ctx.drawImage(rapper3, 250 - anim3, 15, 30, 120);
                loop(carta);
            } else {
                carta = 0;
                document.getElementById("carta3").style.display = "inline";

            }
        } else if (carta == 4) {
            anim4++;
            if (anim4 < 55) {
                ctx.drawImage(rapper4, 250 - anim4, 15, 30, 120);
                loop(carta);
            } else {
                carta = 0;
                document.getElementById("carta4").style.display = "inline";

            }
        }


    }, 1000 / fps1)
}

// Funções de drag and drop relacionadas a jogabilidade

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('ID', event.target.getAttribute('id'));

}

function drop(event) {

    var rapper_grande = document.createElement("img");
    var flag = 0;
    var escolha1 = document.getElementById("escolha1");
    var escolha2 = document.getElementById("escolha2");
    var escolha3 = document.getElementById("escolha3");

    event.preventDefault();
    var data = event.dataTransfer.getData('ID');



    //Ao arrastar uma miniatura para a div de escolha coloca sua imagem grande correspondente 
    rapper_grande.setAttribute("src", "imgs/" + data);
    rapper_grande.setAttribute("height", "100%");
    rapper_grande.setAttribute("width", "100%");
    rapper_grande.setAttribute("alt", "rapper_grande");
    rapper_grande.setAttribute("draggable", "false");



    if (escolha1.lastChild != null) {
        if (escolha1.lastChild.src == rapper_grande.src) {
            flag = 1;
        }
    }

    if (escolha2.lastChild != null) {
        if (escolha2.lastChild.src == rapper_grande.src) {
            flag = 1;
        }
    }

    if (escolha3.lastChild != null) {
        if (escolha3.lastChild.src == rapper_grande.src) {
            flag = 1;
        }
    }

    if (document.getElementById(event.target.getAttribute('ID')) == null) {

        if (flag == 0) {
            var salva;

            event.target.src = "";

            console.log("rapper_grande.src.relative: " + rapper_grande.getAttribute("src"));
            event.target.appendChild(rapper_grande);
            event.target.src = rapper_grande.getAttribute("src");

        }

    } else if (document.getElementById(event.target.getAttribute('ID')).innerHTML == "") {

        if (flag == 0) {
            event.target.appendChild(rapper_grande);



        }




    }


}

// Embaralha o deck
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// Ao clicar em uma carta e nenhuma div de escolha estiver vazia vai ao modo batalha
function confirmaCarta() {

    if (document.getElementById("escolha1").innerHTML != "" && document.getElementById("escolha2").innerHTML != "" && document.getElementById("escolha3").innerHTML != "") {

        comecarJogo();
        setTimeout(function() {
            verificaVitoriaVelocidade();
            verificaVitoriaLetras();
            verificaVitoriaSonoridade();
            document.getElementById("escolha1").style.pointerEvents = " none";
            document.getElementById("escolha2").style.pointerEvents = " none";
            document.getElementById("escolha3").style.pointerEvents = " none";

        }, 2000);

        setTimeout(function() {
            reiniciaRodada();
        }, 8000);



    }




}

// Função de sleep para animações
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
