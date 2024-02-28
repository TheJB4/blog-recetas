import { useEffect, useState } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { obtenerUnaRecetaPorCategoria } from "../../helpers/api"

export default function Categoria() {
    let { nombreCategoria } = useParams()
    let [recetas, setRecetas] = useState([])

    useEffect(() => {
        const recetasPorCategoria = async (nombreCategoria) => {
            let miRecetas = await obtenerUnaRecetaPorCategoria(nombreCategoria)
            
            setRecetas(miRecetas)
        }
        recetasPorCategoria(nombreCategoria)
    }, [nombreCategoria])

    return (
        <main className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {recetas.length === 0 && <h1>No hay recetas</h1>}
                {recetas?.map(receta => (
                    <div className="border border-gray-300 rounded-lg p-4">
                        <img src={receta.imagen} alt="" className="w-full h-[200px]  object-cover mb-2 rounded-md grid-flow-col" />
                        <Link
                            to={`/${receta.titulo}`}
                            state={{ receta: receta }}
                            className="text-center text-blue-500 hover:text-blue-700"
                        >
                            {receta.titulo}
                        </Link>
                    </div>
                ))}
            </div>

        </main>
    )
}