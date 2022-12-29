import './App.css';
import HomePage from './pages/HomePage';
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Github from './pages/Github';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
          
       <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>} />
          <Route path='github' element={<Github/>} />
        </Route>        
       </Routes>    
       <Footer/>   
    </div>
  );
}

export default App;
