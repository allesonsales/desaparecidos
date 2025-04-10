import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Personagens from "./pages/personagens/personagens";
import Arquivos, { ArquivosContext } from "./provider";
import Menu from "./components/menu/menu";
import ModalDicas from "./components/modalDicas/modalDicas";
import HistoriaPrincipal from "./pages/historia/historiaPrincipal";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Arquivos>
            <ModalDicas />
            <Menu />
            <Routes>
              <Route path="/desaparecidos" element={<Home />} />
              <Route path="/personagens" element={<Personagens />} />
              <Route
                path="/personagens/:personagem"
                element={<HistoriaPrincipal />}
              />
            </Routes>
          </Arquivos>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
