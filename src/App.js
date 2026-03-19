import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddProducts from './components/AddProducts';
import Mpesa from './components/Mpesa';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    
    <div className="App">
      <header className="App-header" >
       <h1 className='text-white' >Welcome To Tara Pet Store ltd</h1>
      </header>
   
       <nav className='text-white ' id='nav'>
      <Link to='/'className='btn btn-dark text-white m-3 btn-outline-info' >Home</Link>
      <Link to='/addproducts'className='btn btn-dark text-white m-3 btn-outline-info'>AddProducts</Link>
      
      <Link to='/signin'className='btn btn-dark text-white m-3 btn-outline-info'>SignIn</Link>
      <Link to='/aboutus' className='btn btn-dark text-white m-3 btn-outline-info'> AboutUs</Link>
      <Link to='contactus' className='btn btn-dark text-white m-3 btn-outline-info'> ContactUs</Link>
      <Link to='/signup'className='btn btn-primary text-white  px-4 py-2" m-7 btn-outline-info'>SignUP NOW</Link>

       </nav>

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addproducts' element={<AddProducts/>}/>
    
    <Route path='/signIn' element={<SignIn/>}/>
    <Route path='/mpesa' element={<Mpesa/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/signup' element={<SignUp/>} />






    </Routes>
    </div>
    </Router>
  );
}

export default App;
