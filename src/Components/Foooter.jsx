import { ChatBubbleLeftIcon, UserPlusIcon } from "@heroicons/react/24/solid"

export default function Footer() {
    return (
        <footer className="bg-black py-4 text-white">
            <div className="container mx-auto px-5 w-full lg:flex lg:justify-between lg:items-center" >
                <h1>&copy; Todos los derechos reservados</h1>
                <div className="flex">
                    <ChatBubbleLeftIcon  className="w-[50px]"/>
                    <UserPlusIcon className="w-[50px]"/>
                </div>
            </div>
        </footer>
    )
}