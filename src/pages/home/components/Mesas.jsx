import { useContext } from "react"
import { closeModal, numberForBrl, openModal } from "../../../utils/functions"
import "../css/mesas.css"
import { DataContext } from "../../../context/DataContext"
import NotificationBtn from "../../../Classes/NotificationBtn"

export default function Mesas() {
    const { comandas, setComanda, newNotification } = useContext(DataContext)

    const handleSelectTable = (mesa, comanda) => {
        if (comanda) {
            setComanda(comanda)
            openModal("comanda")
        } else {
            NotificationBtn
            newNotification(3, "Login", `Quer iniciar uma nova comanda na mesa ${mesa}?`, [new NotificationBtn({
                text: "Prosseguir", tag: "button", fun: () => {
                    closeModal()
                }, color: "blue"
            })])
        }
    }

    return (
        <div className="component mesas">
            <h2>Mesas: </h2>
            <div className="content">
                <div className="list mesas">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => {
                        const mesa = {
                            numero: el,
                            status: false,
                            total: 0,
                            comanda: undefined
                        }
                        comandas.forEach((item) => {
                            if (item.mesa === el) {
                                mesa.status = true
                                mesa.total = item.total
                                mesa.comanda = item
                            }
                        })
                        return (
                            <div className="item mesa" key={"mesa" + index} onClick={() => { handleSelectTable(mesa.numero, mesa.comanda) }} status={mesa.status ? "O" : "L"}>
                                <div className="info">
                                    <p>{mesa.status ? "ocupada" : "livre"}</p>
                                    <h4>{mesa.numero}</h4>
                                    <span>{numberForBrl(mesa.total)}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}