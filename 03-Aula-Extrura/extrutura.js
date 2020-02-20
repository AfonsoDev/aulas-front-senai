"use strict";
const notas = [2,8,15,20,8];

// notas.push (confirm('Digite uma nota'));

//  Map = Retorna um novo array do mesmo tamanho modificado ou nao
    /*argumentos do callback:
        1° Elemento do Array
        2° Indice do Array
        3° Array do array
    */
   /* Filter - Retorna um novo array filtrando pela condição;
   argumentos do callback:
   1° Elemento do Array
   2° Indice do Array
   3° Array do array */

    const notasAtualizadas = notas.map( (elemento)=> elemento*10 );
    const notasAcimaDaMedia = notas.filter( ( nota)=> nota >=5);

    const notasTotal = notas.reduce( (acc,nota) => acc + nota);
    
    const notasPares = notas.filter( nota => nota % 2 == 0)
                            .map (nota => nota + 100);


    const exibirDados= ( el, cliente,) =>{
        el.innerHTML += `
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${cliente.nome}</div>
        <div class="card-body">${cliente.idade}</div>
        <div class="card-body">${cliente.cidade}</div>
        </div>`;
    }
    const $resultado = document.getElementById('resultado');

    
    
    const clientes = [
    {nome: "Fon", idade: "19",  cidade: "Avaré-Sp",},
    {nome: "tutinha", idade: "16",  cidade: "jadnira-Sp",},
    {nome: "chiquititas", idade: "16",  cidade: "jandira-Sp",},
    {nome: "herick", idade: "16",  cidade: "jandira-Sp",}
]

const nome = prompt ("Digite seu nome");
const idade = prompt ("Digite sua idade");
const cidade = prompt ("Digite seu Cidade");

clientes.push({"nome": nome, "idade": idade, "cidade": cidade});

clientes.forEach(cliente => exibirDados($resultado, cliente));
// exibirDados($resultado, clientes [0]);