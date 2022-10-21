
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Charts from './components/Chart.js';
import Footer from './components/Footer.js'
import { Routes,Route } from "react-router-dom"


function App() {



  return (
    <>
    {/* <Navbar /> */}
    <Routes>
    <Route  path="/" element={<Home />}/>
    <Route path="/signup" element={<Signup />} />
    </Routes>        
      

        <div className="App">
          {/* <Charts /> */}
        </div>
        {/* <Footer/>  */}
 

    </>
  );
}
export default App;