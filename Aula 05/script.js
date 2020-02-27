"use strict";

const alunoA = ['Ana Clara', '8 ', '5', '7','D2M'];

// const [nome, nota1, nota2, nota3] = aluno;

// console.log(aluno);

const aluno = {
    nome:"Ana clara",
    nota1: "5",
    nota2: "8",
    nota3: "10",
    turma: "DSM"
    
 };

//  const {turma, nota3} = aluno;

//  console.log(turma, nota3);

 const [cliente, ...Valores] = alunoA
 console.log(Valores);

 const maior = Math.max(...Valores);
 console.log(Valores);

 const soma = (...numeros) => numeros.reduce((acc, num) => acc + num);
    console.log( soma (100, 55, 30)); 