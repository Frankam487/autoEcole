import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Avis from "./pages/Avis";
import Whatsapp from "./components/Whatsapp";
const App = () => {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/avis" element={<Avis/>}/>
      </Routes>
    </BrowserRouter>
      <Whatsapp/>
    </>
  );
};

export default App;