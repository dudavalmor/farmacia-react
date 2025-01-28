import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-emerald-500 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2x1 font-bold">Farma(gen)</Link>

                    <div className='flex gap-4'>
                        <Link to="/categorias" className="houver:underline">Categorias</Link>
                        <Link to='/cadastrarcategorias' className='houver:underline'>Cadastrar categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar