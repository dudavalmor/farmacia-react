import { Link } from "react-router";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <div className='py-3 px-8 bg-emerald-400 text-black font-bold text-2xl'>
        <div className="flex space-x-6">
          <div>
            <div className="text-lg font-bold dark:text-black">
              {categoria.nome}
            </div>
          </div>
        </div>
        <div className="flex gap-4" >
          <Link
            to={`/atualizarcategoria/${categoria.id}`}
            className='w-full text-white bg-blue-950 hover:bg-blue-900
            flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>

          <Link
            to={`/deletarcategorias/${categoria.id}`}
            className='w-full text-slate-100 bg-red-700 hover:bg-red-600
            flex items-center justify-center py-2'
          >
           <button>Deletar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCategoria;