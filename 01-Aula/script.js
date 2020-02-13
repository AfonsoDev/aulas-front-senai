//FAZER ESSE TESTE PARA VER SE O SCRIPT ESTA VINCULADO AO HTML
//alert("TUTINHA VAMOS CONVERSAR SOBRE DESENHO JAPONES")

// function msg (){
//     if( true ){
//         var nome = "Afonso"

//     }   
    
// }
// alert(nome);

// const nome = "Fernando";
// const idade = 12;
// const teste = true;
// const produto = {produto: "mouse", quantidade: "45"};
// const somar = () => 3 + 3;

// console.log( typeof ( nome ));
// console.log( typeof ( idade ));
// console.log( typeof ( teste ));
// console.log( typeof ( produto ));
// console.log( typeof ( somar ));

// const cidade = "São Roque";
// const estado = 'SP'
// const pais = `BR`;

// console.log("TUTINHA MORA EM: ", cidade);
// console.log("Tuinha gosta do time do:", estado);
// console.log("Tutinha acha que o:", pais, "é BOM")

// let nota1 = 8;
// let nota2 = 8;

// console.log(nota1++);
// console.log(nota1, "Valor do nota 1")
// console.log(++nota2);

// nota1 += 1;


const $exibir = document.getElementById('exibir');
const $oculta = document.getElementById('oculta');
const $calcular = document.getElementById('botaocalcular');
const $container = document.querySelector('.container')


const calcularMedia = (n1, n2) => (parseInt(n1) + parseInt(n2) ) /2;
const verificarSituacao = (media) => media >= 5 ? "Aprovado" : "Reprovado"


const exibirMedia = () => {
    const $nome = document.getElementById('nome');
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');

    const media = calcularMedia(nota1, nota2);
    $situacao.value = verificarSituacao(media);

        $media.value = media;
        // if( media >= 5){
        //     $situacao.value = "APROVADO";
        //     $situacao.style.color = 'green';
        //     //Criar classe no css depois add no javascript
            
        // }else{
        //     $situacao.value = "Reprovado";
        //     $situacao.style.color = 'red';
        // }

        // $media.value = media;
}


const calcularConceito = () => {
    const media = document.getElementById('media').value;   
    const $conceito = document.getElementById('conceito');

    if(media == 0 || media < 3){
        $conceito.value = "E";
    }else{
        if(media == 5 || media < 3){
            $conceito.value = "D";
        }else{
            if(media == 5 || media < 8){
                $conceito.value = "C";
            }else{
                if(media == 5 || media < 10){
                    $conceito.value = "B";
                }else{
                    if(media == 10){
                        $conceito.value = "A";
                    }
                }
            }
        }
    }
}

function calcular(){
    exibirMedia();
    calcularConceito();
}

const exibir = ( el ) =>{
    el.classList.add( 'exibir' );
}


const oculta = ( el ) =>{
    el.classList.remove( 'exibir' );
}



$calcular.addEventListener('click',calcular);
$exibir.addEventListener('click',() => exibir($container));
$oculta.addEventListener('click',() => oculta($container));
