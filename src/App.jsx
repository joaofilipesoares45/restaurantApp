import Notification from "./components/Notification"
import { DataProvider } from "./context/DataContext"
import Comanda from "./pages/home/components/Comanda"
import RouterApp from "./Routes"

function App() {
  return (
    <DataProvider>
      <RouterApp/>
      <Comanda/>
      <Notification/>
    </DataProvider>
  )
}

export default App
