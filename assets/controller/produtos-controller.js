import { produtoServices } from "../../servicos/produtos-servicos.js";

const novoProduto = (image, name, price) => {
    const card = document.createElement("div");
    //card.classList.add("card")
    const conteudo = `
                    <div class="produto__card ">
                        <img src="${image}">
                        <div class="populares__card___cabecalho">
                            <h3 class="populares__card___nome "${name} >Poduto XYZ</h3>
                            <p class="populares__card___titulo ${price}">98,00</p>
                            <a href="#" >Ver Console</a>
                        </div>
                    </div>
    `

    card.innerHTML = conteudo

    return card


}
const produtos = document.querySelector('[data-produto]')


const render = async() => {
    try {
        const listaProdutos = await produtoServices.listaProdutos()
        listaProdutos.forEach(elemento => {
            produtos.appendChild(novoProduto(elemento.image, elemento.name, elemento.price, elemento.id, elemento.descricao))

        });


    } catch (erro) {
        console.log(erro);
    }


}
render()