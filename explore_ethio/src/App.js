
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/header/Header';

import Project from './components/projects/Project';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
  
        <Routes>
        <Route exact path="/exlore_eth" element ={<Home />} /> 
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        </Routes>
    

   
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
