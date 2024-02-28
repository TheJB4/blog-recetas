import { Link } from "react-router-dom";

import { Bars3Icon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";

import RollingLogo from '../assets/rollingrecetas.png'

export default function Menu() {
    let [clicked, setClicked] = useState(false)
    let [showCategories, setShowCategories] = useState(false)
    let [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [isLogged])
    return (
        <nav className="py-4">
            <div className="flex justify-between items-center sm:w-full sticky top-0 py-2 bg-white">
                <div onClick={() => setClicked(!clicked)}>
                    <Bars3Icon className="w-8 h-8 lg:hidden" />
                </div>
                <div className="flex items-center justify-center w-[50%] h-auto">
                    <img src={RollingLogo} alt="logo" className="w-10 h-10 mr-2" />
                    <p className="text-lg font-bold">Rolling Recetas</p>
                </div>
                <ul className="hidden md:hidden lg:flex lg:items-center lg:bg-transparent lg:justify-end lg:w-full lg:py-0 lg:h-auto lg:relative lg:text-black">
                    <li className="lg:mr-6">
                        <a href="/" className="block py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent">
                            Inicio
                        </a>
                    </li>
                    <li className="lg:mr-6">
                        <a href="/admin" className="block py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent">
                            Administrador
                        </a>
                    </li>
                    <li className="lg:mr-6">
                        {isLogged
                            ? (<a className="block py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent cursor-pointer" onClick={() =>{
                                sessionStorage.clear()
                                setIsLogged(false)
                            }}>
                                Logout
                            </a>)
                            : (<a href="/login" className="block py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent">
                                Login
                            </a>)
                        }
                    </li>
                    <li className="lg:mr-6 cursor-pointer" onClick={() => setShowCategories(!showCategories)}>
                        <span className="flex items-center py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent">
                            Categorias {showCategories ? <ChevronDownIcon className="w-4 h-4 ml-1" /> : <ChevronRightIcon className="w-4 h-4 ml-1" />}
                        </span>
                        {showCategories && (
                            <ul className="lg:absolute lg:top-full lg:right-0 lg:w-[50%] lg:bg-gray-700 lg:py-2 lg:text-white">
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Aperitivos">Aperitivos y tapas</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Arroces">Arroces y cereales</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Avez">Avez y caza</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Carne">Carne</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/bebidas">Cocteles y bebidas</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Ensaladas">Ensaladas</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Guisos">Guisos y potajes</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Postres">Postres</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Pescado">Pescado</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            {clicked && (
                <ul className="flex flex-col">
                    <li className="lg:mr-6">
                        <a href="/" className="block py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent">
                            Inicio
                        </a>
                    </li>
                    <li className="">
                        <a href="/admin" className="block py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent">
                            Administrador
                        </a>
                    </li>
                    <li className="lg:mr-6">
                        {isLogged
                            ? (<a className="block py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent cursor-pointer" onClick={() => {
                                sessionStorage.clear()
                                setIsLogged(false)
                            }}>
                                Logout
                            </a>)
                            : (<a href="/login" className="block py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent">
                                Login
                            </a>)
                        }
                    </li>
                    <li className="cursor-pointer" onClick={() => setShowCategories(!showCategories)}>
                        <span className="flex items-center py-2 px-4 hover:bg-gray-700 lg:hover:bg-transparent">
                            Categorias {showCategories ? <ChevronDownIcon className="w-4 h-4 ml-1" /> : <ChevronRightIcon className="w-4 h-4 ml-1" />}
                        </span>
                        {showCategories && (
                            <ul className="lg:absolute lg:top-full lg:right-0 lg:w-[50%] lg:bg-gray-700 lg:py-2 lg:text-white">
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Aperitivos">Aperitivos y tapas</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Arroces">Arroces y cereales</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Avez">Avez y caza</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Carne">Carne</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/bebidas">Cocteles y bebidas</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Ensaladas">Ensaladas</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Guisos">Guisos y potajes</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Postres">Postres</Link></li>
                                <li><Link className="block py-2 px-4 hover:bg-gray-600" to="categoria/Pescado">Pescado</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            )}
            <hr className="pt-3" />
        </nav>
    )
}