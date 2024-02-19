import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    let [recetas, setRecetas] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/recetas')
            .then(res => res.json())
            .then(data => setRecetas(data))
    }, [])

    return (
        <main className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {recetas.map(receta => (
                    <div className="border border-gray-300 rounded-lg p-4">
                        <img src={receta.imagen} alt="" className="w-full h-[200px]  object-cover mb-2 rounded-md grid-flow-col" />
                        <Link
                            to={`/${receta.titulo}`}
                            state={{receta: receta}}
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