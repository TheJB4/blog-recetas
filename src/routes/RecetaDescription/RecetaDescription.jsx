import { useLocation } from "react-router"

export default function RecetaDescription() {
    let { receta } = useLocation().state;

    console.log(receta)
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <p className="text-3xl font-bold mb-4">{receta.titulo}</p>
                <hr className="border-gray-300 mb-4" />
                <p className="text-sm text-gray-600 mb-2">Autor: {receta.autor}</p>
                <img src={receta.imagen} alt="" className="w-full h-auto mb-4 rounded-lg" />
                <p className="text-lg mb-4">{receta.descripcion}</p>
                <p className="text-lg mb-2 font-bold">Ingredientes:</p>
                <div>
                    <ol className="list-decimal pl-4 mb-4">
                        {receta.ingredientes.map((ingrediente, index) => (
                            <li key={index} className="text-base">{ingrediente}</li>
                        ))}
                    </ol>
                </div>
                <p className="text-lg mb-2 font-bold">Pasos:</p>
                <div>
                    <ol className="list-decimal pl-4 mb-4">
                        {receta.pasos.map((paso, index) => (
                            <li key={index} className="text-base">{paso}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </main>
    )
}