
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
  
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        </Routes>
        {/* <Footer /> */}

   
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
