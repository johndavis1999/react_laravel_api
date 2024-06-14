//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//importar componentes
import ShowProducts from './componentes/ShowProducts';
import CreateProduct from './componentes/CreateProduct';
import EditProduct from './componentes/EditProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={ <ShowProducts/> } />
        <Route path='create/' element={ <CreateProduct/> } />
        <Route path='edit/:id' element={ <EditProduct/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
