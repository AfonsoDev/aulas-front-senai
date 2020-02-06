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



const $calcular = document.getElementById('botaocalcular');



function calcularMedia () {
    const $nome = document.getElementById('nome');
    const $nota1 = document.getElementById('nota1');
    const $nota2 = document.getElementById('nota2');
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');
    // console.log($nome.value);

    const media  = (parseInt($nota1.value) + parseInt($nota2.value)) /2; 

        if( media >= 5){
            $situacao.value = "APROVADO";
            $situacao.style.color = 'green'
            //Criar classe no css depois add no javascript
            
        }else{
            $situacao.value = "Reprovado"
            $situacao.style.color = 'red'
        }

        $media.value = media;
}

$calcular.addEventListener('click',calcularMedia);
