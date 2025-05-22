import { useContext } from "react"
import { DataContext } from "../../../context/DataContext"
import "../css/comanda.css"
import { faCheck, faPlus, faTrashAlt, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { closeModal, numberForBrl, openModal } from "../../../utils/functions"
import AddPrato from "./AddPrato"

export default function Comanda() {
    const { comanda, setComanda, comandas, setComandas } = useContext(DataContext)

    const hadleRemoveItem = (index) => {
        const newItem = comanda
        newItem.pratos = newItem.pratos.filter((_, i) => i !== index)
        newItem.total = 0
        newItem.pratos.forEach(({ preco }) => {
            newItem.total += preco
        })
        setComandas([...comandas, newItem])
    }

    return (
        <div className="modal comanda">
            {comanda &&
                <div className="content">
                    <AddPrato />
                    <div className="head">
                        <h3>Comanda {comanda.status ? "ativa" : "finalizada"} <FontAwesomeIcon icon={faXmark} onClick={() => { setComanda(); closeModal("comanda") }} /></h3>
                        <span>id: {comanda.id}</span>
                    </div>

                    <button onClick={() => openModal("add-prato")} className="add-btn"><FontAwesomeIcon icon={faPlus} />Adicionar</button>


                    <div className="list">
                        {comanda.pratos.length > 0 ? comanda.pratos.map((item, index) => {
                            return (
                                <div className="item" key={"prato" + index}>
                                    <div className="info">
                                        <h4>{item.nome}</h4>
                                        <p>{numberForBrl(item.preco)}</p>
                                    </div>
                                    <FontAwesomeIcon icon={faTrashAlt} onClick={() => hadleRemoveItem(index)} />
                                </div>
                            )
                        }) : <h3>Nada foi adicionado a comanda!</h3>}
                    </div>
                    <nav>
                        <p className="total-price">Subtotal: {numberForBrl(comanda.total)}</p>
                        {comanda.pratos.length > 0 && <button className="conclude-btn">Concluir <FontAwesomeIcon icon={faCheck} /></button>}
                    </nav>
                </div>
            }

        </div>
    )
}