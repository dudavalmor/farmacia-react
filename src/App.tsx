import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import FormCategorias from './components/categorias/formcategorias/FormCategoria';
import DeletarCategorias from './components/categorias/deletartema/DeletarCategoria';



function App() {
    return (
      <>
          <BrowserRouter>
            <Navbar />
            <div className="min-h-[80vh]">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategorias" element={<FormCategorias />} />
            <Route path="/atualizarcategoria/:id" element={<FormCategorias />} />
            <Route path="/deletarcategorias/:id" element={<DeletarCategorias />} />
            </Routes>
            </div>
            <Footer />
          </BrowserRouter>
      </>
    )
  }

export default App;
