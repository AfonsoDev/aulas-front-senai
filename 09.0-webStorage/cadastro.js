//behavior smooth 
// const nome = prompt ("Digite seu nome");


const btn = document.getElementById('btn');
const btnremove = document.getElementById('btnremove');
const atualizarlista = document.getElementById('list');


const atualizacao = () =>{
    var nome = localStorage.getItem ('nome');
    atualizarlista.innerHTML=``;
    if(localStorage.hasOwnProperty('nomes')){
        var json = JSON.parse(localStorage.getItem('nomes'));
        json.forEach( objeto => {
            atualizarlista.innerHTML +=`<div>${ objeto.nome }</div>`;
        })
    }
}

const gravar = ()=>{
    let nomes = new Array();

    var nome = prompt( "Insira o nome que será adicionado:" );

    if( localStorage.hasOwnProperty( 'nomes' ) ){
        nomes = JSON.parse( localStorage.getItem( 'nomes' ) );
    }

    nomes.push( { 'nome' : nome } );

    localStorage.setItem( 'nomes', JSON.stringify( nomes ) );
    
    atualizacao();
}
const excluir = ()=>{
    var nomes = JSON.parse ( localStorage.getItem( 'nomes'));

    var nomesatualizados = nomes.filter( nome => nome.nome != nome );
}
atualizacao();
document.getElementById('btn').addEventListener('click', gravar);


