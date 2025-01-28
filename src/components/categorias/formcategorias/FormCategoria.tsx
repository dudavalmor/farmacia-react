import { ChangeEvent, useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Services";
import Categoria from "../../../models/Categoria";

const FormCategorias = () => {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Erro ao buscar a categoria.");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/${id}`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("Erro ao atualizar a categoria.");
        }
      }
    } else {
      try {
        await cadastrar("/categorias", categoria, setCategoria);
        alert("Categoria cadastrada com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("Erro ao cadastrar a categoria.");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        className="w-1/2 flex flex-col gap-4 p-8 bg-white rounded-xl shadow-md" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-semibold">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome da categoria"
            name="nome"
            className="border-2 border-slate-700 rounded-md p-3"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
          />
        </div>

        <button
          className="w-full py-2 rounded-md text-white bg-lime-700 hover:bg-lime-900 mt-4 flex items-center justify-center cursor-pointer"
          type="submit"
        >
          {isLoading ? (
            <div className="flex justify-center">
              <MutatingDots color="#ffffff" secondaryColor="#5a5a5a" />
            </div>
          ) : 
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormCategorias;