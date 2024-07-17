import Routers from "./routes/routes"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  )
}

export default App
