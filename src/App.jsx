import { Outlet } from "react-router-dom"
import Footer from "./Components/Foooter"
import Menu from "./Components/Menu"
import { useState } from "react"

function App() {
  let [recetas,setRecetas] = useState([])
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Menu></Menu>
      <div className="flex-grow">
        <Outlet recetas={recetas}/>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default App
