import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Sign-up/Sign-up';
import Privatecmp from './Components/Privatecmp';
import Login from './Components/Log-in';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      
      <Navbar />
      <Routes>

        <Route element={<Privatecmp />}>
        <Route path='/' element={<ProductList />}></Route>
        <Route path='/add' element={<AddProduct />}></Route>
        <Route path='/update/:id' element={<UpdateProduct />}></Route>
        <Route path='/logout' element={<h1>Logout  Component</h1>}></Route>
        <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
       
        </Route>

         <Route path='/signup' element={<Signup />}></Route>
         <Route path='/login' element={<Login />}></Route>
      </Routes>
      
      <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App;
