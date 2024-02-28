import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { crearUnUsuario } from "../../helpers/api";
import Swal from "sweetalert2";
import { useState } from "react";


export default function Register() {
    const { register, handleSubmit, formState: { errors }, reset, resetField } = useForm();

    let navigate = useNavigate()

    const sendForm = async (usuario) => {
        let data = await crearUnUsuario(usuario)

        if (data.status === 201) {
            Swal.fire({
                title: "Usuario creado con exito",
                text: `El usuario "${usuario.email}" fue creado correctamente`,
                icon: "success"
            });
            sessionStorage.setItem('user',JSON.stringify({email:usuario.email}))
            location.href = '/'
        }else{
            Swal.fire({
                title: "Ocurrio un error",
                text: data.message,
                icon: "error"
              });
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Registrarse
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(sendForm)}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Correo electrónico
                            </label>
                            <input
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'El email ingresado no es correcto!'
                                    }
                                })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Correo electrónico"
                            />
                            <p className="text-red-700 font-bold text-center">{errors.email?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: 'Debe ingresar como mínimo 8 caracteres'
                                    }
                                })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                            />
                            <p className="text-red-700 font-bold text-center">{errors.password?.message}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <p>
                                ¿Ya tienes una cuenta? <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">Iniciar sesión</Link>
                            </p>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}