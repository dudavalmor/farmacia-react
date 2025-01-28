function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-emerald-500 text-white'>
            
                <div className="container flex justify-between text-lg">
                    Farma(gen)

                    <div className='flex gap-4'>
                        Produtos
                        Cadastrar produtos
                        Categoria
                        Cadastrar categorias
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar