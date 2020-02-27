const frutas = ['Mamao', 'Laranja', 'Uva'];
const clientes = ['Mamao1', 'Laranja2', 'Uva3'];
const card = ( arr,title="lista" ) => {
    const $card = document.createElement('div');
    $card.classList.add('card'); 
    const elementos = arr.join('</li><li>');
    $card.innerHTML = `
    <div class="card-title">
       ${title}
    </div>
    <div class="card-body">
        <ul>
          <li>${elementos}</li>
        </ul>
    </div>`;
    return $card;
}
const $container = document.querySelector('.container');

    $container.appendChild(card( frutas, "Frutas"));
    $container.appendChild(card( clientes,));



// const $div = document.createElement('div');
// $div.innerHTML = card();
// $container.appendChild($div);

