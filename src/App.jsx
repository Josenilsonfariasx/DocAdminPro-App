import "./styles/index.scss"
import { RoutesMain } from "./routes/routes"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
  )
}

export default App
