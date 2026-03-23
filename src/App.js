
import Cat from './components/Cat';
import DropDown from './components/DropDown';
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
      <Link to='/' className='custom-btn'>Home</Link>
  <Link to='/addproducts' className='custom-btn'>Add Products</Link>
  <Link to='/signin' className='custom-btn'>Sign In</Link>
  <Link to='/aboutus' className='custom-btn'>About Us</Link>
  <Link to='/contactus' className='custom-btn'>Contact Us</Link>



       </nav>

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addproducts' element={<AddProducts/>}/>
    
    <Route path='/signIn' element={<SignIn/>}/>
    <Route path='/mpesa' element={<Mpesa/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/signup' element={<SignUp/>} />
     <Route path='/cat' element={<Cat/>} />







    </Routes>
    </div>
    </Router>
  );
}

export default App;
