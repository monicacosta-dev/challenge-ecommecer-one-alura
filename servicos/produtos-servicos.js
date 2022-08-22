//pegar os dados usando o Methodo GET

const listaProdutos = () => fetch("http://localhost:3000/produtos").then(resposta => resposta.json())

//Usaremos o Metodo POST

const criaProduto = (image, name, price, descricao) => {
        return fetch(`http: //localhost:3000/produtos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image: image,
                nome: name,
                preco: price,
                descricao: descricao,


            })

        })

        .then(resposta => {
            if (resposta.ok) {
                return resposta.body
            }
            throw new Erro("Não foi possivel criar produto!");
            // console.log("Não foi possivel criar produto!")
        })
    }
    /*Final do Post */

const atualizaProduto = (image, nome, preco, descricao) => {
    return fetch(`
            http: //localhost:3000/produtos/`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                image: image,
                nome: nome,
                preco: preco,
                descricao: descricao,


            })
        })
        .then(resposta => {
            return resposta.json()
        })
}

export const produtoServices = {
    listaProdutos,
    criaProduto,
    atualizaProduto

}