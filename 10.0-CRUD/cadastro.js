const $novo = document.getElementById('novo');
const $fechar = document.getElementById('fechar');
const $salvar = document.getElementById('salvar');

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add ('exibirModal');
const fecharModal = () => document.querySelector('.conteiner-modal').classList.remove('exibirModal');
const salvarAluno = () => {
    fecharModal();
};

//validator (document.getElementById('form'));
//emailValidator(document.getElementById('email'));

const dataLoad = ( data ) => {

    const $registros = document.getElementById('registros');
    data.forEach(element => {
        const $tr = document.createElement('tr');
        $tr.innerHTML = `
            <td>${element.codigo}</td>
            <td>${element.aluno}</td>
            <td>${element.email}</td>
            <td>${element.celular}</td>
            <td>${element.cidade}</td>
            <td>${element.acao}</td>
        `;
        
        $registros.appendChild($tr);
    })

}


const getAlunos = async url =>{
    const response = await fetch ( url );
    const json = await response.json();
    return json.data;
}
const ShowAlunos = async () =>{
    const alunos = await getAlunos ('http://localhost/aulas-front-senai/aulas-front-senai/10.0-CRUD/apiphp/alunos/');

    const formatAlunos = alunos.map (({id:codigo, nome:aluno, email, celular, cidade}) => 
                                        ({codigo, aluno, email,celular,cidade}) );
    dataLoad( formatAlunos );
}
ShowAlunos();

$novo.addEventListener('click',exibirModal);
$fechar.addEventListener('click',fecharModal);
$salvar.addEventListener('click',salvarAluno);