import './App.css';
import ErrorPage from './Pages/404Page';
import Category from './Pages/Category';
import Home from './Pages/Home';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
          <Route path="categories" element={<Category/>} />
          <Route path="/*" element={<ErrorPage/>} />
          <Route path="/products" element={<Products/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
