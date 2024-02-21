import { Outlet } from "react-router-dom"
import Footer from "./Components/Foooter"
import Menu from "./Components/Menu"

function App() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Menu></Menu>
      <div className="flex-grow">
        <Outlet/>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default App
