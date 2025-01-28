
function Home() {
    return (
        <>
            <div className="bg-emerald-200 flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        Bem vindo a Farma(gen)
                        </h2>
                        <p className='text-xl'>
                        Sua farmácia de manipulados on-line
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-black 
                                            border-emerald-900 border-solid border-2 py-2 px-4'
                                >
                                Cadastrar produtos
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://img.freepik.com/fotos-gratis/capsulas-medicas-de-close-up-com-ervas-em-cima-da-mesa_23-2148431497.jpg?t=st=1738033173~exp=1738036773~hmac=a682b585a917ce85b21c70ab3ca3f79040a46a86b06665997c164dc471f37253&w=740"
                            alt="Imagem Página Home"
                            className='w-3/6'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

/*function Home() {
    return (
        <>
            <div className="w-screen flex justify-center">
                <div>
                    <div className="flex flex-col items-center">
                    <h2 className="text-3x1 font-bold">Bem vindo a farma(gen)</h2>
                    <p>Sua farmácia de manipulados on-line</p>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img
                            src="https://img.freepik.com/fotos-gratis/capsulas-medicas-de-close-up-com-ervas-em-cima-da-mesa_23-2148431497.jpg?t=st=1738033173~exp=1738036773~hmac=a682b585a917ce85b21c70ab3ca3f79040a46a86b06665997c164dc471f37253&w=740"
                            alt="Imagem da Página Home"
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home*/
