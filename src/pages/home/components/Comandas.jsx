import { useContext } from "react";
import { formCaptureData, numberForBrl } from "../../../utils/functions";
import "../css/comandas.css"
import { DataContext } from "../../../context/DataContext";
export default function Comandas() {

    const {comandas} = useContext(DataContext)

    const submit = (event) => {
        event.preventDefault()
        const { target } = event
        console.log(formCaptureData(target));
    }

    return (
        <div className="component comandas">
            <form onSubmit={submit}>
                <h2>Comandas</h2>
                <div className="inputs">
                    <div>
                        <label htmlFor="id-comanda">Id da comanda</label>
                        <input type="text" id="id-comanda" name="id" />
                    </div>
                </div>
                <nav>
                    <button type="submit">Buscar comanda</button>
                </nav>
            </form>

            <div className="list">
                {comandas.map((item, index) => {
                    const {id, mesa, total, pratos, status} = item
                     return (
                        <div className="item" key={"fasfd"+index} state={String(status)}>
                            <h3>id: {id} <p>{numberForBrl(total)}</p></h3>
                            <h4>mesa: {mesa}</h4>
                            <span>
                                {pratos.map(({nome}, index) =>{
                                    return index < (pratos.length - 1) ? `${nome}, `: nome
                                })}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}