export default function Modal({ pasos, ingredientes, setViewPasos, setViewIngredientes }) {
    if (pasos) {
        return (
            <div className="fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center">
                <div className="bg-white rounded-md py-4 px-5 flex flex-col justify-center items-center">
                    <p className="text-3xl cursor-pointer" onClick={() => setViewPasos(false)}>X</p>
                    <ol className="list-decimal">
                        {pasos.map((paso,index) => (
                            <li key={index}>{paso}</li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    } else if (ingredientes) {
        return (
            <div className=" fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center">
                <div className="bg-white rounded-md py-4 px-5 flex flex-col justify-center items-center">
                    <p className="text-3xl cursor-pointer" onClick={() => setViewIngredientes(false)}>X</p>
                    <ol className="list-decimal">
                        {ingredientes.map((ingrediente,index) => (
                            <li key={index}>{ingrediente}</li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}