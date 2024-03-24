import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { obtenerRecetas } from "../../helpers/api"

export default function Home() {
    let [recetas, setRecetas] = useState([])
    let [filtro, setFiltro] = useState('')

    let myRecetas = async () => {
        let data = await obtenerRecetas()

        setRecetas(data)
    }

    useEffect(() => {
        myRecetas()
    }, [])

    return (
        <main className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {!recetas && <h1>No hay recetas</h1>}
                {recetas?.map(receta => (
                    <div className="border border-gray-300 rounded-lg p-4" key={receta.id}>
                        <img src={receta.imagen} alt="" className="w-full h-[200px]  object-cover mb-2 rounded-md grid-flow-col" />
                        <Link
                            to={`/${receta.titulo}`}
                            state={{ receta: receta }}
                            className="text-center text-blue-500 hover:text-blue-700"
                        >
                            {receta.tituloReceta}
                        </Link>
                    </div>
                ))}
            </div>

        </main>
    )
}