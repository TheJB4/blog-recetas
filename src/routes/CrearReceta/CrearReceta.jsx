import { useState } from "react"
import { useForm } from "react-hook-form"
import { crearUnaReceta } from "../../helpers/api"
import Swal from "sweetalert2"

export default function CrearReceta() {
    const { register, handleSubmit, formState: { errors }, reset,resetField } = useForm()

    const sendForm = async (producto) => {
        producto.ingredientes = ingredientes
        producto.pasos = pasos
        producto.valoracion = 0
        producto.categorias = categorias

        let response = await crearUnaReceta(producto)

        if(response.status === 201){
            Swal.fire({
                title: "Receta Creada",
                text: `La receta "${producto.tituloReceta}" fue creado correctamente`,
                icon: "success"
              });
              navigate('/')
        }else{
            Swal.fire({
                title: "Ocurrio un error",
                text: `La receta "${producto.tituloReceta}" no pudo ser creada. Intenta esta operación en unos minutos.`,
                icon: "error"
              });
        }
    }

    let [nombreIngrediente, setNombreIngrediente] = useState('')
    let [ingredientes, setIngredientes] = useState([])

    let [nombrePaso, setNombrePaso] = useState('')
    let [pasos, setPasos] = useState([])

    let [nombreCategoria,setNombreCategoria] = useState('')
    let [categorias,setCategorias] = useState([])

    return (
        <section className="container mx-auto py-8">
            <form onSubmit={handleSubmit(sendForm)} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="tituloReceta" className="block mb-1">Título receta:</label>
                    <input
                        id="tituloReceta"
                        {...register("tituloReceta", { required: true })}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="autor" className="block mb-1">Autor:</label>
                    <input
                        id="autor"
                        {...register("autor", { required: true })}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="descripcion" className="block mb-1">Descripción:</label>
                    <input
                        id="descripcion"
                        {...register("descripcion", { required: true })}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <label htmlFor="ingredientes" className="block w-1/4 mr-2">Ingredientes:</label>
                    <input
                        id="ingredientes"
                        onChange={(e) => {
                            setNombreIngrediente(e.target.value);
                        }}
                        className="w-3/4 px-4 py-2 border rounded-md"
                        value={nombreIngrediente}
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIngredientes([
                                ...ingredientes,
                                nombreIngrediente,
                            ]);
                            setNombreIngrediente("") // Limpiar el input después de agregar
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 hover:bg-blue-600"
                    >
                        Agregar
                    </button>
                </div>
                <div>
                    <ol className="list-decimal pl-8">
                        {ingredientes.map((ingrediente, index) => (
                            <li key={index}>{ingrediente}</li>
                        ))}
                    </ol>
                </div>
                <div className="mb-4 flex items-center">
                    <label htmlFor="pasos" className="block w-1/4 mr-2">Pasos:</label>
                    <input
                        id="pasos"
                        onChange={(e) => {
                            setNombrePaso(e.target.value);
                        }}
                        className="w-3/4 px-4 py-2 border rounded-md"
                        value={nombrePaso}
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setPasos([
                                ...pasos,
                                nombrePaso,
                            ]);
                            setNombrePaso(""); // Limpiar el input después de agregar
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 hover:bg-blue-600"
                    >
                        Agregar
                    </button>
                </div>
                <div>
                    <ol className="list-decimal pl-8">
                        {pasos.map((paso, index) => (
                            <li key={index}>{paso}</li>
                        ))}
                    </ol>
                </div>
                <div className="mb-4">
                    <label htmlFor="sugerencias" className="block mb-1">Sugerencias:</label>
                    <input
                        id="sugerencias"
                        {...register("sugerencias", { required: true })}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="imagen" className="block mb-1">Imagen:</label>
                    <input
                        id="imagen"
                        {...register("imagen", { required: true })}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <label htmlFor="categorias" className="block w-1/4 mr-2">Categorias:</label>
                    <input
                        id="categorias"
                        onChange={(e) => {
                            setNombreCategoria(e.target.value);
                        }}
                        className="w-3/4 px-4 py-2 border rounded-md"
                        value={nombreCategoria}
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setCategorias([
                                ...categorias,
                                nombreCategoria,
                            ]);
                            setNombreCategoria(""); // Limpiar el input después de agregar
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 hover:bg-blue-600"
                    >
                        Agregar
                    </button>
                </div>
                <div>
                    <ol className="list-decimal pl-8">
                        {categorias.map((ingrediente, index) => (
                            <li key={index}>{ingrediente}</li>
                        ))}
                    </ol>
                </div>
                <input
                    type="submit"
                    value='Crear'
                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                />
            </form>
        </section>
    )
}