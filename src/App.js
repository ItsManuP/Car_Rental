
import './App.css';
import { Route, Routes, useRoutes} from "react-router-dom";
import Chi_Siamo from './pages/Chi_Siamo';
import Recensioni from './pages/Recensioni';
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
      <Route path="Recensioni" element={<Recensioni />} />
      <Route path="Contattaci" element={<Contattaci />} />
    </Routes>
    </>

  );
}

export default App;
