import Categoria from "../Categoria";
import Item from "../Item";
import Modal from "../Modal";
import "./Nav.css";
import { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [listas, setListas] = useState([]);

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar__tarefas">
                <Categoria>Tarefas</Categoria>
                <ul>
                    <Item itemNome="Hoje" href="/"/>
                    <Item itemNome="Próximos 7 dias" href="/tarefas/proximos-7-dias"/>
                </ul>
            </div>
            <div className="navbar__listas">
                <Categoria>Listas</Categoria>
                <button className="criar-lista" onClick={() => abrirModal()}>Criar lista</button>
                <ul>
                    <Item itemNome="Casa" numero={3}/>
                    <Item itemNome="Trabalho" numero={7}/>
                    <Item itemNome="Mercado" numero={12}/>
                </ul>
            </div>

            <Modal isOpen={isOpen} fecharModal={fecharModal}/>
        </nav>
    )
}

export default Nav;