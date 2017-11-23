/*  Neste javascript engloba funções em que é realizada a logica da IA onde a mesma escolhe a maior carta de cada atributo para batalhar contra o jogador
    É realizada tambem a verificação de quem venceu a rodada.*/
/*AUTORES:
        Mateus Talzzia Diogo,                               15147861
        Paulo Vinicius Martimiano de Oliveira,              15149313
        Rafael Mont’Alverne de Souza,                       15078371 
*/
/*OBS:  */

// Escolhe as melhores cartas para cada atributo do computador e insere as mesmas para batalha
function InsereMaoIa() {
    var cartasAtributos = JSON.parse(rappers);
    var rapper_grandeIa1 = document.createElement("img");
    var rapper_grandeIa2 = document.createElement("img");
    var rapper_grandeIa3 = document.createElement("img");

    var escolha1 = document.getElementById("escolha1");
    var escolha2 = document.getElementById("escolha2");
    var escolha3 = document.getElementById("escolha3");

    var auxNomeRapper1 = new Array(40);
    var auxNomeRapper2 = new Array(40);
    var auxNomeRapper3 = new Array(40);

    var NomeRapper1, NomeRapper2, NomeRapper3;
    var cartaVelocidadeIaMaior = 0;
    var cartaLetraIaMaior = 0;
    var cartaSonoridadeIaMaior = 0;

    var velocidadesIa = new Array(4);
    var letrasIa = new Array(4);
    var sonoridadesIa = new Array(4);

    var cartaUtilizada = new Array(3);

    velocidadeIaMaior = 0;
    letraIaMaior = 0;
    sonoridadeIaMaior = 0;

    for (var i = 5; i < escolha1.lastChild.getAttribute("src").length; i++) {
        auxNomeRapper1[i] = escolha1.lastChild.getAttribute("src")[i];
    }

    NomeRapper1 = auxNomeRapper1.join("");
    for (var i = 0; i < cartasAtributos.cartas.length; i++) {
        if (NomeRapper1.valueOf() == cartasAtributos.cartas[i].nomeGrande.valueOf()) {
            velocidade = cartasAtributos.cartas[i].velocidade;
        }
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////

    for (var i = 5; i < escolha2.lastChild.getAttribute("src").length; i++) {
        auxNomeRapper2[i] = escolha2.lastChild.getAttribute("src")[i];
    }



    NomeRapper2 = auxNomeRapper2.join("");
    for (var i = 0; i < cartasAtributos.cartas.length; i++) {

        if (NomeRapper2.valueOf() == cartasAtributos.cartas[i].nomeGrande.valueOf()) {
            letras = cartasAtributos.cartas[i].letra;
        }
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////

    for (var i = 5; i < escolha3.lastChild.getAttribute("src").length; i++) {
        auxNomeRapper3[i] = escolha3.lastChild.getAttribute("src")[i];
    }

    NomeRapper3 = auxNomeRapper3.join("");
    for (var i = 0; i < cartasAtributos.cartas.length; i++) {

        if (NomeRapper3.valueOf() == cartasAtributos.cartas[i].nomeGrande.valueOf()) {
            sonoridade = cartasAtributos.cartas[i].sonoridade;
        }
    }

    velocidadesIa[0] = cartasAtributos.cartas[cartasMaoIa[0] - 1].velocidade;
    velocidadesIa[1] = cartasAtributos.cartas[cartasMaoIa[1] - 1].velocidade;
    velocidadesIa[2] = cartasAtributos.cartas[cartasMaoIa[2] - 1].velocidade;
    velocidadesIa[3] = cartasAtributos.cartas[cartasMaoIa[3] - 1].velocidade;



    for (var i = 0; i < 4; i++) {
        if (velocidadesIa[i] > velocidadeIaMaior) {
            velocidadeIaMaior = velocidadesIa[i];
            cartaVelocidadeIaMaior = i;
            cartaUtilizada[0] = i;
        }
    }


    rapper_grandeIa1.setAttribute("src", "imgs/" + cartasAtributos.cartas[cartasMaoIa[cartaVelocidadeIaMaior] - 1].nomeGrande);
    rapper_grandeIa1.setAttribute("height", "100%");
    rapper_grandeIa1.setAttribute("width", "100%");
    rapper_grandeIa1.setAttribute("alt", "Ia1");

    document.getElementById("escolha1Ia").appendChild(rapper_grandeIa1);

    letrasIa[0] = cartasAtributos.cartas[cartasMaoIa[0] - 1].letra;
    letrasIa[1] = cartasAtributos.cartas[cartasMaoIa[1] - 1].letra;
    letrasIa[2] = cartasAtributos.cartas[cartasMaoIa[2] - 1].letra;
    letrasIa[3] = cartasAtributos.cartas[cartasMaoIa[3] - 1].letra;



    for (var i = 0; i < 4; i++) {
        if (cartaUtilizada[0] != i) {

            if (letrasIa[i] > letraIaMaior) {
                letraIaMaior = letrasIa[i];
                cartaLetraIaMaior = i;
                cartaUtilizada[1] = i;
            }


        }

    }

    rapper_grandeIa2.setAttribute("src", "imgs/" + cartasAtributos.cartas[cartasMaoIa[cartaLetraIaMaior] - 1].nomeGrande);
    rapper_grandeIa2.setAttribute("height", "100%");
    rapper_grandeIa2.setAttribute("width", "100%");
    rapper_grandeIa2.setAttribute("alt", "Ia2");

    document.getElementById("escolha2Ia").appendChild(rapper_grandeIa2);

    sonoridadesIa[0] = cartasAtributos.cartas[cartasMaoIa[0] - 1].sonoridade;
    sonoridadesIa[1] = cartasAtributos.cartas[cartasMaoIa[1] - 1].sonoridade;
    sonoridadesIa[2] = cartasAtributos.cartas[cartasMaoIa[2] - 1].sonoridade;
    sonoridadesIa[3] = cartasAtributos.cartas[cartasMaoIa[3] - 1].sonoridade;



    for (var i = 0; i < 4; i++) {
        if (cartaUtilizada[0] != i) {
            if (cartaUtilizada[1] != i) {
                if (sonoridadesIa[i] > sonoridadeIaMaior) {

                    sonoridadeIaMaior = sonoridadesIa[i];
                    cartaSonoridadeIaMaior = i;
                }
            }

        }

    }

    rapper_grandeIa3.setAttribute("src", "imgs/" + cartasAtributos.cartas[cartasMaoIa[cartaSonoridadeIaMaior] - 1].nomeGrande);
    rapper_grandeIa3.setAttribute("height", "100%");
    rapper_grandeIa3.setAttribute("width", "100%");
    rapper_grandeIa3.setAttribute("alt", "Ia3");

    document.getElementById("escolha3Ia").appendChild(rapper_grandeIa3);


}

// Funções abaixo que comparam quem venceu na batalha do atributo e realiza a animação de derrota

function verificaVitoriaVelocidade() {
    var queimaCarta1 = document.createElement('div');
    var sitdown1 = document.createElement('div');

    if ((velocidadeIaMaior - velocidade) > 0) {

        moralJogador--;

        var i;
        var j = 40;

        queimaCarta1.className = "cartaQueima";
        queimaCarta1.style.left = "8%";
        queimaCarta1.style.width = "20%";
        queimaCarta1.style.height = "40%";
        queimaCarta1.style.border = "0px";

        sitdown1.className = "cartaQueima";
        sitdown1.style.left = "8%";
        sitdown1.style.width = "20%";
        sitdown1.style.height = "40%";
        sitdown1.style.border = "0px";

        document.body.appendChild(queimaCarta1);
        document.body.appendChild(sitdown1);

        sitdown1.innerHTML = "<img id=sitdown position=absolute src=imgs/sitdown.png>";

        setTimeout(function() {
            queimaCarta1.innerHTML = "<img id=fogo1 position=absolute src=imgs/fogo.gif>";

            (function theLoop(i) {
                setTimeout(function() {
                    escolha1.style.height = j + "%";
                    queimaCarta1.style.height = j + "%";
                    sitdown1.style.height = j + "%";
                    j--;
                    if (--i) { 
                        theLoop(i); 
                    }
                }, 100);
            })(1000);

        }, 1000);




    }

    if ((velocidadeIaMaior - velocidade) < 0) {

        moralIA--;

        var i;
        var j = 40;

        queimaCarta1.style.position = "absolute";
        queimaCarta1.style.left = "8%";
        queimaCarta1.style.bottom = "5%";
        queimaCarta1.style.width = "20%";
        queimaCarta1.style.height = "40%";
        queimaCarta1.style.border = "0px";


        sitdown1.style.left = "8%";
        sitdown1.style.bottom = "5%";
        sitdown1.style.width = "20%";
        sitdown1.style.height = "40%";
        sitdown1.style.border = "0px";
        sitdown1.style.position = "absolute";
        document.body.appendChild(queimaCarta1);
        document.body.appendChild(sitdown1);

        sitdown1.innerHTML = "<img id=sitdown position=absolute src=imgs/sitdown.png>";



        setTimeout(function() {
            queimaCarta1.innerHTML = "<img id=fogo1 position=absolute src=imgs/fogo.gif>";

            (function theLoop(i) {
                setTimeout(function() {
                    carta1_cpu.style.height = j + "%";
                    queimaCarta1.style.height = j + "%";
                    sitdown1.style.height = j + "%";
                    j--;
                    if (--i) { 
                        theLoop(i); 
                    }
                }, 100);
            })(1000);

        }, 1000);
    }

    if (velocidade == velocidadeIaMaior) {
        console.log("Você empatou velocidade");

    }
}

/////////////////////////////////////////////////////////////////////

function verificaVitoriaLetras() {
    var queimaCarta2 = document.createElement('div');
    var sitdown2 = document.createElement('div');


    if ((letraIaMaior - letras) < 0) {


        moralIA--;

        var i;
        var j = 40;


        queimaCarta2.style.left = "40%";
        queimaCarta2.style.bottom = "5%";
        queimaCarta2.style.width = "20%";
        queimaCarta2.style.height = "40%";
        queimaCarta2.style.position = "absolute";

        sitdown2.style.left = "40%";
        sitdown2.style.bottom = "5%";
        sitdown2.style.width = "20%";
        sitdown2.style.height = "40%";
        sitdown2.style.position = "absolute";


        document.body.appendChild(queimaCarta2);
        document.body.appendChild(sitdown2);

        sitdown2.innerHTML = "<img id=sitdown position=absolute src=imgs/sitdown.png>";

        setTimeout(function() {
            queimaCarta2.innerHTML = "<img id=fogo1 position=absolute src=imgs/fogo.gif>";

            (function theLoop(i) {
                setTimeout(function() {
                    carta2_cpu.style.height = j + "%";
                    queimaCarta2.style.height = j + "%";
                    sitdown2.style.height = j + "%";
                    j--;
                    if (--i) { 
                        theLoop(i); 
                    }
                }, 100);
            })(1000);

        }, 1000);

    }

    if ((letraIaMaior - letras) > 0) {
        moralJogador--;


        var i;
        var j = 40;


        queimaCarta2.className = "cartaQueima";
        queimaCarta2.style.left = "40%";
        queimaCarta2.style.width = "20%";
        queimaCarta2.style.height = "40%";
        queimaCarta2.style.border = "0px";


        sitdown2.className = "cartaQueima";
        sitdown2.style.left = "40%";
        sitdown2.style.width = "20%";
        sitdown2.style.height = "40%";
        sitdown2.style.border = "0px";

        document.body.appendChild(queimaCarta2);
        document.body.appendChild(sitdown2);

        sitdown2.innerHTML = "<img id=sitdown position=absolute src=imgs/sitdown.png>";

        setTimeout(function() {
            queimaCarta2.innerHTML = "<img id=fogo1 position=absolute src=imgs/fogo.gif>";

            (function theLoop(i) {
                setTimeout(function() {
                    escolha2.style.height = j + "%";
                    queimaCarta2.style.height = j + "%";
                    sitdown2.style.height = j + "%";
                    j--;
                    if (--i) { 
                        theLoop(i); 
                    }
                }, 100);
            })(1000);

        }, 1000);


        if (letras == letraIaMaior) {
            console.log("Você empatou letra");
        }

    }
}

function verificaVitoriaSonoridade() {
    var queimaCarta3 = document.createElement('div');
    var sitdown3 = document.createElement('div');

    if ((sonoridadeIaMaior - sonoridade) > 0) {

        moralJogador--;


        var i;
        var j = 40;

        queimaCarta3.className = "cartaQueima";
        queimaCarta3.style.left = "72%";
        queimaCarta3.style.width = "20%";
        queimaCarta3.style.height = "40%";
        queimaCarta3.style.border = "0px";

        sitdown3.className = "cartaQueima";
        sitdown3.style.left = "72%";
        sitdown3.style.width = "20%";
        sitdown3.style.height = "40%";
        sitdown3.style.border = "0px";


        document.body.appendChild(queimaCarta3);
        document.body.appendChild(sitdown3);

        sitdown3.innerHTML = "<img id=sitdown position=absolute src=imgs/sitdown.png>";

        setTimeout(function() {
            queimaCarta3.innerHTML = "<img id=fogo1 position=absolute src=imgs/fogo.gif>";

            (function theLoop(i) {
                setTimeout(function() {
                    escolha3.style.height = j + "%";
                    queimaCarta3.style.height = j + "%";
                    sitdown3.style.height = j + "%";
                    j--;
                    if (--i) { 
                        theLoop(i); 
                    }
                }, 100);
            })(1000);

        }, 1000);
    }

    if ((sonoridadeIaMaior - sonoridade) < 0) {

        moralIA--;

        var i;
        var j = 40;



        queimaCarta3.style.left = "72%";
        queimaCarta3.style.bottom = "5%";
        queimaCarta3.style.width = "20%";
        queimaCarta3.style.height = "40%";
        queimaCarta3.style.position = "absolute";

        sitdown3.style.left = "72%";
        sitdown3.style.bottom = "5%";
        sitdown3.style.width = "20%";
        sitdown3.style.height = "40%";
        sitdown3.style.position = "absolute";

        document.body.appendChild(queimaCarta3);
        document.body.appendChild(sitdown3);

        sitdown3.innerHTML = "<img id=sitdown position=absolute src=imgs/sitdown.png>";

        setTimeout(function() {
            queimaCarta3.innerHTML = "<img id=fogo1 position=absolute src=imgs/fogo.gif>";

            (function theLoop(i) {
                setTimeout(function() {
                    carta3_cpu.style.height = j + "%";
                    queimaCarta3.style.height = j + "%";
                    sitdown3.style.height = j + "%";
                    j--;
                    if (--i) {
                        theLoop(i);
                    }
                }, 100);
            })(1000);

        }, 1000);



        if (sonoridade == sonoridadeIaMaior) {
            console.log("Você empatou sonoridade");

        }
    }
}