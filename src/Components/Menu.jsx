import { Link } from "react-router-dom";

import { Bars3Icon,ChevronDownIcon,ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

export default function Menu() {
    let [clicked, setClicked] = useState(false)
    let [showCategories, setShowCategories] = useState(false)
    return (
        <nav>
            <div
                onClick={() => setClicked(!clicked)}
            >
                <Bars3Icon className="w-[30px]" />
            </div>
            {clicked && (
                <ul className="h-screen bg-gray-700 text-white">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/admin">Administrador</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li 
                        className="flex"
                        onClick={()=> setShowCategories(!showCategories)}
                    >
                        Categorias {showCategories ? <ChevronDownIcon className="w-[15px]"/>: <ChevronRightIcon className="w-[15px]"/>} 
                    </li>
                    {showCategories && (
                        <ul>
                            <li>
                                <a>Aperitivos y tapas</a>
                            </li>
                            <li>
                                <a>Arroces y cereales</a>
                            </li>
                            <li>
                                <a>Avez y caza</a>
                            </li>
                            <li>
                                <a>Carne</a>
                            </li>
                            <li>
                                <a>Cocteles y bebidas</a>
                            </li>
                            <li>
                                <a>Ensaladas</a>
                            </li>
                            <li>
                                <a>Guisos y potajes</a>
                            </li>
                            <li>
                                <a>Postres</a>
                            </li>
                            <li>
                                <a>Pescado</a>
                            </li>
                        </ul>
                    )}
                </ul>
            )}
        </nav>
    )
}