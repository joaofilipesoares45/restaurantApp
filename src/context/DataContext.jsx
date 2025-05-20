import { createContext, useState } from "react";
import { openModal } from "../utils/functions";

export const DataContext = createContext();

// const getData = async (ref, set) => {
//     const res = await getDocs(ref);
//     set(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
// }

const listC = [
    {   
        id: 1,
        mesa: 4,
        status: true,
        total: 85,
        pratos: [{
            nome: "Filé Mignon ao Molho Roquefort",
            descricao: "Corte nobre de filé mignon grelhado na perfeição, coberto com um cremoso molho de queijo Roquefort.",
            preco: 75.00
        },{ nome: "Cervejas", preco: 10.00, observacao: "A partir de" }]
    }
]

export function DataProvider({ children }) {
    const [usuarioAtual, setUsuarioAtual] = useState()
    const [notification, setNotification] = useState()
    const [colorMode, setColorMode] = useState(true)
    const [comandas, setComandas] = useState(listC)
    const [comanda, setComanda] = useState()
    
    const newNotification = (type, title, text, options) => {
        setNotification({type, title, text, options})
        openModal('notification')
    }

    const value = {
        colorMode, 
        setColorMode,
        usuarioAtual, 
        setUsuarioAtual,
        notification, 
        setNotification,
        newNotification,
        comandas, 
        setComandas,
        comanda, 
        setComanda,
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}