async function listaProdutos() {
    const conexao = await fetch('https://api-alura-geek-seven.vercel.app/produtos');
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {
    const conexao = await fetch('https://api-alura-geek-seven.vercel.app/produtos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function deletaProduto(id) {
    await fetch(`https://api-alura-geek-seven.vercel.app/produtos/${id}`, {
        method: 'DELETE'
    });
}


export const conectaApi = {
    listaProdutos,
    criaProduto,
    deletaProduto
};
