
import './App.css';
import { Route, Routes, useRoutes} from "react-router-dom";
import Chi_Siamo from './pages/Chi_Siamo';

import Contattaci from './pages/Contattaci';
import Home from './pages/Home';
import Header from './pages/Header'

function App() {
  return (
    <>
    <Header/>
    <Routes >
      <Route index path="/" element={<Home />} />
      <Route path="Chi_Siamo" element={<Chi_Siamo />} />
      
      <Route path="Contattaci" element={<Contattaci />} />
    </Routes>
    </>

  );
}

export default App;
