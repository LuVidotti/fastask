import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Principal from "./pages/Principal";
import Login from "./pages/Login";
import ProximosDias from "./pages/ProximosDias";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Principal}/>
        <Route path="/tarefas/proximos-7-dias" Component={ProximosDias}/>
        <Route path="/login" Component={Login}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
