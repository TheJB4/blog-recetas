import { useEffect, useState } from "react"
import { DocumentPlusIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom";
import { eliminarUnaReceta } from "../../helpers/api";
import Swal from "sweetalert2";

import Modal from '../../Components/Modal'

export default function Administrador() {
    let [recetas, setRecetas] = useState([])
    let [viewPasos, setViewPasos] = useState(false)
    let [viewIngredientes, setViewIngredientes] = useState(false)
    let [pasoss, setPasoss] = useState([])
    let [ingredientess, setIngredientess] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://blog-recetas-api.vercel.app/api/recetas')
            .then(res => res.json())
            .then(data => setRecetas(data))
    }, [])


    let eliminarReceta = async (id, producto) => {
        let response = await eliminarUnaReceta(id)

        if (response.status === 200) {
            Swal.fire({
                title: "Receta Eliminada",
                text: `La receta "${producto.tituloReceta}" fue Eliminada orrectamente`,
                icon: "success"
            });
            navigate('/')
        } else {
            Swal.fire({
                title: "Ocurrio un error",
                text: `La receta "${producto.nombreProducto}" no pudo ser creada. Intenta esta operación en unos minutos.`,
                icon: "error"
            });
        }
    }
    return (
        <main className="container mx-auto py-5">
            <div className="w-full  flex flex-col justify-center ">

                <div className="overflow-auto">
                    <table className="table-auto overflow-scroll w-full">
                        <thead>
                            <tr className="bg-gray-50">
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
                                <th onClick={() => navigate("/crearReceta")} className="cursor-pointer">
                                    <DocumentPlusIcon className="w-[30px] hover:text-green-600" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {recetas.map((receta) => (
                                <tr key={receta.id} className="bg-white">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{receta.tituloReceta}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{receta.autor}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{receta.descripcion}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button onClick={() => {
                                            setViewIngredientes(true);
                                            setIngredientess(receta.ingredientes);
                                        }} className="text-blue-600 hover:text-blue-900">Mostrar</button>
                                        {viewIngredientes && <Modal ingredientes={ingredientess} />}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button onClick={() => {
                                            setViewPasos(true);
                                            setPasoss(receta.pasos);
                                        }} className="text-blue-600 hover:text-blue-900">Mostrar</button>
                                        {viewPasos && <Modal pasos={pasoss} />}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                        <button onClick={() => navigate('/editarReceta', { state: { receta: receta } })} className="text-indigo-600 hover:text-indigo-900 mr-2">Editar</button>
                                        <button onClick={() => eliminarReceta(receta._id, receta)} className="text-red-600 hover:text-red-900">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {viewPasos && <Modal pasos={pasoss} setViewPasos={setViewPasos} />}
            {viewIngredientes && <Modal ingredientes={ingredientess} setViewIngredientes={setViewIngredientes} />}
        </main>
    )
}