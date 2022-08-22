import { produtoServices } from "../../servicos/produtos-servicos.js";

const fromProdutos = document.querySelector("[data-form]");

fromProdutos.addEventListener('submit', (event) => {
    event.preventDefault();

    const image = document.querySelector("[data-form-img]").value
    const nome = document.querySelector("[data-form-nome]").value
    const preco = document.querySelector("[data-form-preco]").value
    const descricao = document.querySelector("[data-form-desc]").value

    produtoServices.criaProduto(nome, image, preco).then((resposta) => {
        window.location = "/index.html"
        console.log(resposta)

    }).catch(erro => {
        console.log(erro);
    });

})