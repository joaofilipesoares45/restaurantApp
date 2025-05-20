import { useState } from "react"
import Sidebar from "./components/sidebar"
import "./css/index.css"
import Mesas from "./components/Mesas"

export default function Home() {
    const [component, setComponent] = useState(<Mesas/>)

    return (
        <div className="page home">
            <header>
                <h1>Restaurante Teste</h1>
            </header>
            <main className="home-main">
                <Sidebar setComponent={setComponent}/>
                <section className="component-contain">
                    {component}
                </section>
            </main>
        </div>
    )
}