import './App.css';
import ErrorPage from './Pages/404Page';
import Category from './Pages/Category';
import Home from './Pages/Home';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="" element={<Navbar/>}>
        <Route path="/home" element={<Home/>}/>
          <Route path="categories" element={<Category/>} />
          <Route path="/*" element={<ErrorPage/>} />
          <Route path="/products/:id?" element={<Products/>}/>
          <Route path="/productDetail/:id?" element={<ProductDetails/>}/>
          </Route>
          
        
      </Routes>
    </div>
  );
}

export default App;
