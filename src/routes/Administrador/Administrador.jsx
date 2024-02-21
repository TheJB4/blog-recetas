import { useEffect, useState } from "react"
import { DocumentPlusIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom";

export default function Administrador() {
    let [recetas, setRecetas] = useState([])
    let [viewModal, setViewModal] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/recetas')
            .then(res => res.json())
            .then(data => setRecetas(data))
    }, [])

    return (
        <main className="container mx-auto py-5">
            <div className="w-full h-screen flex flex-col justify-center ">

                <table className="table-auto divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Título
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Autor
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Descripción
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ingredientes
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Pasos
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                            <th onClick={()=> {
                                navigate("/crearReceta");
                            }}>
                                <DocumentPlusIcon className="w-[30px]" />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {recetas.map((receta) => (
                            <tr key={receta.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 truncate">{receta.titulo}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 truncate">{receta.autor}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 truncate">{receta.descripcion}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="text-blue-600 hover:text-blue-900">Mostrar</button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="text-blue-600 hover:text-blue-900">Mostrar</button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Editar</button>
                                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}