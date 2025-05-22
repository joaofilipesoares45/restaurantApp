import { faCheck, faList, faPlus, faTrashAlt, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/add-prato.css"
import { useContext, useState } from "react";
import { closeModal, numberForBrl } from "../../../utils/functions";
import { DataContext } from "../../../context/DataContext";

const cardapio = {
    Entradas: [
        { nome: "Bruschetta de Tomate", descricao: "Fatias de pão italiano torradas, cobertas com tomates frescos picados, manjericão, azeite e um toque de alho.", preco: 15.00 },
        { nome: "Caldo Verde", descricao: "Tradicional sopa portuguesa cremosa e reconfortante, feita com batatas, couve e linguiça portuguesa.", preco: 18.00 },
        { nome: "Dadinhos de Tapioca com Molho de Mel", descricao: "Deliciosos cubos de tapioca fritos, crocantes por fora e macios por dentro, servidos com um irresistível molho de mel.", preco: 22.00 }
    ],
    Pratos_principais: [
        {
            nome: "Filé Mignon ao Molho Roquefort",
            descricao: "Corte nobre de filé mignon grelhado na perfeição, coberto com um cremoso molho de queijo Roquefort.",
            preco: 75.00
        },
        {
            nome: "Churrasco Misto (Picanha, Costela, Linguiça)",
            descricao: "Seleção de carnes grelhadas no ponto, incluindo suculenta picanha, costela saborosa e linguiça artesanal.",
            preco: 68.00
        },
        {
            nome: "Frango Grelhado com Batata Rustica",
            descricao: "Peito de frango grelhado, macio e saboroso, acompanhado de batatas rústicas assadas, temperadas com ervas finas.",
            preco: 45.00
        },
        { nome: "Espaguete ao Carbonara", descricao: "Tradicional massa italiana com espaguete, ovos, queijo Pecorino Romano, bacon e pimenta-do-reino.", preco: 48.00 },
        { nome: "Fettuccine Alfredo", descricao: "Massa fettuccine ao molho Alfredo, um clássico cremoso e levemente picante feito com manteiga, queijo parmesão e creme de leite.", preco: 42.00 },
        {
            nome: "Ravioli de Ricota com Molho Pesto",
            descricao: "Massa fresca recheada com ricota cremosa, servida com um saboroso molho pesto, feito com manjericão, alho, queijo parmesão e azeite.",
            preco: 55.00
        },
        { nome: "Salmão Grelhado com Aspargos", descricao: "Salmão grelhado na perfeição, suculento e saboroso, acompanhado de aspargos frescos grelhados.", preco: 65.00 },
        { nome: "Moqueca de Camarão", descricao: "Tradicional moqueca capixaba, feita com camarões frescos, leite de coco, tomate, cebola e coentro.", preco: 70.00 }
    ],
    Sobremesas: [
        { nome: "Mousse de Chocolate", descricao: "Deliciosa mousse de chocolate cremosa e suave, perfeita para finalizar a sua refeição.", preco: 18.00 },
        { nome: "Petit Gateau", descricao: "Bolo de chocolate quente por dentro e crocante por fora, servido com sorvete de creme.", preco: 20.00 },
        { nome: "Sorvete de Doce de Leite", descricao: "Tradicional sorvete artesanal de doce de leite, cremoso e saboroso.", preco: 15.00 }
    ],
    Bebidas: [
        { nome: "Refrigerantes", preco: 8.00 },
        { nome: "Sucos Naturais", preco: 12.00 },
        { nome: "Cervejas", preco: 10.00, observacao: "A partir de" }
    ]
};

export default function AddPrato() {
    const { comanda, comandas, setComandas } = useContext(DataContext)

    const [prevList, setPrevList] = useState(comanda.pratos)

    const search = ({ target }) => {
        const value = target.value

        const list = document.querySelectorAll(".modal.add-prato .content .list")[1].querySelectorAll(".item")
        list.forEach(el => el.removeAttribute("hidden"))

        if (value.length > 0) {
            list.forEach(el => {
                const h4 = el.querySelector("h4").textContent
                if (!h4.toLowerCase().includes(value.toLowerCase())) {
                    el.setAttribute("hidden", "true")
                }
            })
        }
    }

    const handleConclude = () => {
        const newItem = comanda
        newItem.pratos = prevList
        newItem.total = 0
        newItem.pratos.forEach(({ preco }) => {
            newItem.total += preco
        })

        setComandas([...comandas, newItem])
        setPrevList(newItem.pratos)
        closeModal("add-prato")
    }

    return (
        <div className="modal add-prato">
            <div className="content">
                <div className="head">
                    <div className="search-div">
                        <input type="text" placeholder="Nome do prato..." onKeyUp={search} />
                        <nav>
                            <FontAwesomeIcon icon={faList} onClick={({ target }) => {
                                if (target.tagName !== "svg") return
                                target.parentElement.parentElement.parentElement.querySelector(".list").setAttribute("open", "")
                            }} />
                            {prevList.length > 0 ? <FontAwesomeIcon icon={faCheck} onClick={handleConclude} /> : <FontAwesomeIcon icon={faXmark} onClick={() => closeModal("add-prato")} />}
                        </nav>
                    </div>
                    <div className="list">
                        <h3>Adicionado <FontAwesomeIcon icon={faXmark} onClick={({ target }) => {
                            if (target.tagName !== "svg") return
                            target.parentElement.parentElement.removeAttribute("open")
                        }} /></h3>
                        {prevList.map((item, index) => {
                            return (
                                <div className="item" key={"ll" + index}>
                                    <p>{item.nome}</p>
                                    <FontAwesomeIcon icon={faTrashAlt} onClick={() => {
                                        const newList = prevList.filter((_, i) => i !== index)
                                        setPrevList(newList)
                                    }} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="list">
                    {Object.keys(cardapio).map(key => {
                        return (
                            <div className="sub-list" key={"lll" + key}>
                                <h3>{key.replace("_", " ")}</h3>
                                {cardapio[key].map((item, index) => {
                                    const { nome, preco } = item

                                    return (
                                        <div className="item" key={"pra" + index} type={key}>
                                            <div className="info">
                                                <h4>{nome} <span>{numberForBrl(preco)}</span></h4>
                                            </div>
                                            <FontAwesomeIcon icon={faPlus} onClick={() => { setPrevList([...prevList, item]) }} />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}