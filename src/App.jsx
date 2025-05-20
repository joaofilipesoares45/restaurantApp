import Notification from "./components/Notification"
import { DataProvider } from "./context/DataContext"
import RouterApp from "./Routes"

function App() {
  return (
    <DataProvider>
      <RouterApp/>
      <Notification/>
    </DataProvider>
  )
}

export default App
