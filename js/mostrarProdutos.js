import { conectaApi } from "./conectaApi.js";

const cardContainer = document.querySelector('[data-card]');

function constroiCard(id, nome, preco, imagem) {
    const card = document.createElement('div');
    card.className = 'card';
    const precoFormatado = parseFloat(preco).toFixed(2);

    card.innerHTML = `
        <img src="${imagem}" alt="Imagem do produto">
        <div class="card-container--info">
            <p>${nome}</p>
            <div class="card-container--value">
                <p>R$ ${precoFormatado}</p>
                <img src="img/icone-lixeira.png" alt="Icone de lixeira" class="icone-lixeira" data-id="${id}">
            </div>
        </div>
    `;

    return card;
}

export async function listaCard() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        cardContainer.innerHTML = '';

        listaApi.forEach(elemento => {
            const cardElement = constroiCard(elemento.id, elemento.nome, elemento.preco, elemento.imagem);
            cardContainer.appendChild(cardElement);
        });

        const lixeiras = document.querySelectorAll('.icone-lixeira');
        lixeiras.forEach(lixeira => {
            lixeira.addEventListener('click', async (event) => {
                const id = event.target.dataset.id;
                await conectaApi.deletaProduto(id);
                listaCard();
            });
        });
    
    } catch (error) {
        console.error('Erro ao listar os produtos:', error);
    }
}

listaCard();
