import { Outlet } from "react-router-dom"
import Footer from "./Components/Foooter"
import Menu from "./Components/Menu"

function App() {

  return (
    <>
      <Menu></Menu>
      <div>
        <Outlet/>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
