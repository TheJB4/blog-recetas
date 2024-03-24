import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, Navigate, json, useNavigate } from "react-router-dom"
import { loginUsuario } from "../../helpers/api"
import Swal from "sweetalert2"

export default function Login() {
    const { register, handleSubmit, formState: { errors }, reset, resetField } = useForm()
    let navigate = useNavigate()

    const sendForm = async (usuario) => {
        //let myUser = users.find(user => user.email === usuario.email)

        let response = await loginUsuario(usuario)
        let responseMessage = await response.json()

        console.log(responseMessage)
        if(response.status === 404){
            Swal.fire({
                title: "Ocurrio un error",
                text: `${responseMessage.message}`,
                icon: "error"
              });
        }else if(response.status === 400){
            Swal.fire({
                title: "Ocurrio un error",
                text: `${responseMessage.message}`,
                icon: "error"
              });
        }else if(response.status === 200){
                sessionStorage.setItem('user',JSON.stringify(responseMessage.data))
                navigate('/')
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Iniciar sesión
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
                                        value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'El email ingresado no es correcto!'
                                    }
                                })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Correo electrónico"
                            />
                            <p className=" text-red-700 font-bold text-center">{errors.email?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                            </label>
                            <input
                            type="password"
                                {...register('password', {
                                    required: true,
                                    minLength:{
                                        value:8,
                                        message:'Debe ingresar como minimo 8 caracteres'
                                    }
                                })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                            />
                            <p>{errors.password?.message}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:text-blue-500"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <div className="text-sm">
                            <p
                                href="#"
                                className="font-medium text-blue-600 hover:text-blue-500"
                            >
                                No estas registrado? <Link to="/register" className="text-center underline cursor-pointer">Registrate aqui!</Link>
                            </p>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* Heroicon name: lock-closed */}
                                <svg
                                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H4zm10 3a2 2 0 11-4 0 2 2 0 014 0zM8 9a2 2 0 114 0 2 2 0 01-4 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}