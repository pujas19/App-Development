
import Login from './Pages/Login';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import Navbar from './Pages/Navbar';
import Product from './Pages/Products';
import Forgot from './Pages/Forgorpass';
import CartPage from './Pages/Cart';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/navbar' element={<Navbar/>}/>
          <Route  path='/product' element={<Product/>}/>
          <Route  path='/forgot' element={<Forgot/>}/>
          <Route  path='/cart' element={<CartPage/>}/>
          <Route path="/dashboard" element={<><Navbar/><Dashboard/></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
