/*  Neste javascript engloba funções que iniciam e reiniciam as rodadas do jogo, inserindo as cartas inicias que o jogador tem na atual rodada.
    Ao reiniciar uma rodada é necessario restaurar a mesma tela inicial, porém sem perder os dados referente as rodadas anteriores.*/
/*AUTORES:
        Mateus Talzzia Diogo,                               15147861
        Paulo Vinicius Martimiano de Oliveira,              15149313
        Rafael Mont’Alverne de Souza,                       15078371 
*/
/*OBS:  */

// Atributos do jogador
var velocidade = 0;
var letras = 0;
var sonoridade = 0;

// Maiores atributos do computador
var velocidadeIaMaior = 0;
var letraIaMaior = 0;
var sonoridadeIaMaior = 0;

// Arrays para gerar as cartas do jogador e do computador
var cartasDeckJogador = new Array(16);
var cartasMaoJogador = new Array(4);
var cartasMaoIa = new Array(4);
var cartasDeckIa = new Array(16);

// Variaveis para as miniaturas das cartas
var rapper1 = new Image();
var rapper2 = new Image();
var rapper3 = new Image();
var rapper4 = new Image();

// As três divs de batalha do computador
var carta1_cpu = document.createElement('div');
var carta2_cpu = document.createElement('div');
var carta3_cpu = document.createElement('div');

// Variaveis para controlar a velocidade de cada carta miniatura
var anim1 = 0;
var anim2 = 0;
var anim3 = 0;
var anim4 = 0;
var fps1 = 300;

// vida do jogador e do computador
var moralJogador = 9; 
var moralIA = 9; 




// Função que prepara as divs iniciais de escolha e chama a função de gerar mao. Com a mão gerada insere as cartas miniaturas para escolha do jogador
function geraEvento() {

    var cartasAtributos = JSON.parse(rappers);
    var rapper_pequeno1 = document.createElement("img");
    var rapper_pequeno2 = document.createElement("img");
    var rapper_pequeno3 = document.createElement("img");
    var rapper_pequeno4 = document.createElement("img");
    var carta1 = document.getElementById("carta1");
    var carta2 = document.getElementById("carta2");
    var carta3 = document.getElementById("carta3");
    var carta4 = document.getElementById("carta4");

    var aux = new Array(32);

    carta1.style.display = "none";
    carta2.style.display = "none";
    carta3.style.display = "none";
    carta4.style.display = "none";
    document.getElementById("moralJogador").innerHTML = moralJogador;
    document.getElementById("moralIA").innerHTML = moralIA;
    var carta = 0;

    document.getElementById("escolha1").innerHTML = "";
    document.getElementById("escolha2").innerHTML = "";
    document.getElementById("escolha3").innerHTML = "";
    for (var i = 0; i < 32; i++) {
        aux[i] = i + 1;
    }

    aux = shuffle(aux);

    for (var i = 0; i < 16; i++) {
        cartasDeckJogador[i] = aux[i];
    }
    for (var i = 16; i < 32; i++) {
        cartasDeckIa[i - 16] = aux[i];
    }

    geraMao();


    ///////////////////////////////////////////////////////////MINIATURA 1/////////////////////////////////////////////////////////////////
    rapper1.src = "imgs/" + cartasAtributos.cartas[cartasMaoJogador[0] - 1].nomePequeno + ".jpg";
    setTimeout(function() {
        loop(1);
    }, 500);

    console.log("cartasAtributos1 " + cartasAtributos.cartas[cartasMaoJogador[0] - 1].nomePequeno);

    rapper_pequeno1.setAttribute("src", "imgs/" + cartasAtributos.cartas[cartasMaoJogador[0] - 1].nomePequeno + ".jpg");
    rapper_pequeno1.setAttribute("height", "100%");
    rapper_pequeno1.setAttribute("width", "100%");
    rapper_pequeno1.setAttribute("alt", "rapper_pequeno1");
    rapper_pequeno1.setAttribute("id", cartasAtributos.cartas[cartasMaoJogador[0] - 1].nomeGrande);
    rapper_pequeno1.setAttribute("draggable", "true");
    document.getElementById("carta1").appendChild(rapper_pequeno1);



    ///////////////////////////////////////////////////////////////MINIATURA 2/////////////////////////////////////////////////////////////
    rapper2.src = "imgs/" + cartasAtributos.cartas[cartasMaoJogador[1] - 1].nomePequeno + ".jpg";
    setTimeout(function() {
        loop(2);
    }, 2000);

    rapper_pequeno2.setAttribute("src", "imgs/" + cartasAtributos.cartas[cartasMaoJogador[1] - 1].nomePequeno + ".jpg");
    rapper_pequeno2.setAttribute("height", "100%");
    rapper_pequeno2.setAttribute("width", "100%");
    rapper_pequeno2.setAttribute("alt", "rapper_pequeno2");
    rapper_pequeno2.setAttribute("id", cartasAtributos.cartas[cartasMaoJogador[1] - 1].nomeGrande);
    rapper_pequeno2.setAttribute("draggable", "true");


    document.getElementById("carta2").appendChild(rapper_pequeno2);


    ////////////////////////////////////////////////////////////////MINIATURA 3/////////////////////////////////////////////////////////////
    rapper3.src = "imgs/" + cartasAtributos.cartas[cartasMaoJogador[2] - 1].nomePequeno + ".jpg";
    setTimeout(function() {
        loop(3);
    }, 3000);

    rapper_pequeno3.setAttribute("src", "imgs/" + cartasAtributos.cartas[cartasMaoJogador[2] - 1].nomePequeno + ".jpg");
    rapper_pequeno3.setAttribute("height", "100%");
    rapper_pequeno3.setAttribute("width", "100%");
    rapper_pequeno3.setAttribute("alt", "rapper_pequeno3");
    rapper_pequeno3.setAttribute("id", cartasAtributos.cartas[cartasMaoJogador[2] - 1].nomeGrande);
    rapper_pequeno3.setAttribute("draggable", "true");


    document.getElementById("carta3").appendChild(rapper_pequeno3);


    ////////////////////////////////////////////////////////////////MINIATURA 4/////////////////////////////////////////////////////////////
    rapper4.src = "imgs/" + cartasAtributos.cartas[cartasMaoJogador[3] - 1].nomePequeno + ".jpg";
    setTimeout(function() {
        loop(4);
    }, 4000);

    rapper_pequeno4.setAttribute("src", "imgs/" + cartasAtributos.cartas[cartasMaoJogador[3] - 1].nomePequeno + ".jpg");
    rapper_pequeno4.setAttribute("height", "100%");
    rapper_pequeno4.setAttribute("width", "100%");
    rapper_pequeno4.setAttribute("alt", "rapper_pequeno4");
    rapper_pequeno4.setAttribute("id", cartasAtributos.cartas[cartasMaoJogador[3] - 1].nomeGrande);
    rapper_pequeno4.setAttribute("draggable", "true");


    document.getElementById("carta4").appendChild(rapper_pequeno4);

}

// Muda o cenario do jogo para o modo batalha, exibindo as cartas de escolha do jogador e insere as escolhas do computador
function comecarJogo() {
    var rapper_grande1 = document.getElementById("escolha1");
    var rapper_grande2 = document.getElementById("escolha2");
    var rapper_grande3 = document.getElementById("escolha3");
    var desc = document.getElementById("desc");
    var carta1 = document.getElementById("carta1");
    var carta2 = document.getElementById("carta2");
    var carta3 = document.getElementById("carta3");
    var carta4 = document.getElementById("carta4");


    document.body.appendChild(carta1_cpu);
    document.body.appendChild(carta2_cpu);
    document.body.appendChild(carta3_cpu);

    carta1_cpu.style.left = "8%";
    carta1_cpu.style.bottom = "5%";
    carta1_cpu.style.width = "20%";
    carta1_cpu.style.height = "40%";
    carta1_cpu.style.backgroundColor = "red";
    carta1_cpu.style.position = "absolute";
    carta1_cpu.id = "escolha1Ia"

    carta2_cpu.style.left = "40%";
    carta2_cpu.style.bottom = "5%";
    carta2_cpu.style.width = "20%";
    carta2_cpu.style.height = "40%";
    carta2_cpu.style.backgroundColor = "red";
    carta2_cpu.style.position = "absolute";
    carta2_cpu.id = "escolha2Ia"


    carta3_cpu.style.left = "72%";
    carta3_cpu.style.bottom = "5%";
    carta3_cpu.style.width = "20%";
    carta3_cpu.style.height = "40%";
    carta3_cpu.style.backgroundColor = "red";
    carta3_cpu.style.position = "absolute";
    carta3_cpu.id = "escolha3Ia"

    rapper_grande1.style.left = "8%";
    rapper_grande1.style.width = "20%";
    rapper_grande1.style.height = "40%";
    rapper_grande1.style.border = "0px";

    rapper_grande2.style.left = "40%";
    rapper_grande2.style.width = "20%";
    rapper_grande2.style.height = "40%";
    rapper_grande2.style.border = "0px";

    rapper_grande3.style.left = "72%";
    rapper_grande3.style.width = "20%";
    rapper_grande3.style.height = "40%";
    rapper_grande3.style.border = "0px";


    carta1.style.display = "none";
    carta2.style.display = "none";
    carta3.style.display = "none";
    carta4.style.display = "none";

    desc.style.visibility = "hidden";

    InsereMaoIa();

}

// Volta o cenario para o inicial, removendo elementos que nao sao utilzados e contabilizando a vida dos jogadores
function reiniciaRodada() {
    var desc = document.getElementById("desc");
    var escolha1Ia = document.getElementById("escolha1Ia");
    var escolha2Ia = document.getElementById("escolha2Ia");
    var escolha3Ia = document.getElementById("escolha3Ia");

    var carta1 = document.getElementById("carta1");
    var carta2 = document.getElementById("carta2");
    var carta3 = document.getElementById("carta3");
    var carta4 = document.getElementById("carta4");


    var escolha1 = document.getElementById("escolha1");
    var escolha2 = document.getElementById("escolha2");
    var escolha3 = document.getElementById("escolha3");
    desc.style.visibility = "visible";

    escolha1Ia.removeChild(escolha1Ia.lastChild);
    escolha2Ia.removeChild(escolha2Ia.lastChild);
    escolha3Ia.removeChild(escolha3Ia.lastChild);


    carta1.removeChild(carta1.lastChild);
    carta2.removeChild(carta2.lastChild);
    carta3.removeChild(carta3.lastChild);
    carta4.removeChild(carta4.lastChild);

    carta1_cpu.remove();
    carta2_cpu.remove();
    carta3_cpu.remove();




    escolha1.style.width = "30%";
    escolha1.style.height = "60%";
    escolha1.style.top = "10%";
    escolha1.style.left = "3%";

    escolha2.style.width = "30%";
    escolha2.style.height = "60%";
    escolha2.style.top = "10%";
    escolha2.style.left = "35%";

    escolha3.style.width = "30%";
    escolha3.style.height = "60%";
    escolha3.style.top = "10%";
    escolha3.style.left = "67%";

    anim1 = 0;
    anim2 = 0;
    anim3 = 0;
    anim4 = 0;


    escolha1.style.pointerEvents = " auto";
    escolha2.style.pointerEvents = " auto";
    escolha3.style.pointerEvents = " auto";




    if (moralIA <= 0)    {      
        window.location.href = "telaVitoria.html"; //window.open("telaVitoria.html");         
    }   
    else if (moralJogador <= 0)    {      
        window.location.href = "telaDerrota.html"; //window.open("telaDerrota.html");         
    }

    geraEvento();


}