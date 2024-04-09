
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import About  from './components/About';
import Example from './components/Example';
function App() {
    
  return (
    <div> 
      <ul>
        <li><Link to='/home' style={{textDecoration:'none',color:'white'}}>Home</Link></li>
        <li><Link to='/about' style={{textDecoration:'none' ,color:'white'}}>About</Link></li>
        <li><Link to='/coreconcept' style={{textDecoration:'none' ,color:'white'}}>Core Concepts</Link></li>
        
      </ul>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/coreconcept' element={<Example />}/>
      </Routes>
    </div>
    
  );
}

export default App;
