import Routers from "./routes/routes"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "react-quill/dist/quill.snow.css";

function App() {
  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  )
}

export default App
