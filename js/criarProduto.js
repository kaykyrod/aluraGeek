import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const preco = document.querySelector('[data-preco]').value;
    const url = document.querySelector('[data-url]').value;

    await conectaApi.criaProduto(nome, preco, url);

    await listaCard();
}

formulario.addEventListener('submit', evento => criarProduto(evento));
