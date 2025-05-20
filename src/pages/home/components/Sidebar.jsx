import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderAll, faClipboardList, faList } from "@fortawesome/free-solid-svg-icons"
import Comandas from "./Comandas"
import Mesas from "./Mesas"
import Cardapio from "./Cardapio"

export default function Sidebar({setComponent}) {
    return (
        <div className="sidebar">
            <nav >
                <FontAwesomeIcon icon={faClipboardList} onClick={() => setComponent(<Comandas/>)}/>
                <FontAwesomeIcon icon={faBorderAll} onClick={() => setComponent(<Mesas/>)}/>
                <FontAwesomeIcon icon={faList} onClick={() => setComponent(<Cardapio/>)}/>
            </nav>
        </div>
    )
}