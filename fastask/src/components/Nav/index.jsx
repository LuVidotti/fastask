import Categoria from "../Categoria";
import Item from "../Item";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar__tarefas">
                <Categoria>Tarefas</Categoria>
                <ul>
                    <Item itemNome="Hoje" numero={3} href="/"/>
                    <Item itemNome="Próximos 7 dias" numero={7} href="/tarefas/proximos-7-dias"/>
                </ul>
            </div>
            <div className="navbar__listas">
                <Categoria>Listas</Categoria>
                <ul>
                    <Item itemNome="Casa" numero={3}/>
                    <Item itemNome="Trabalho" numero={7}/>
                    <Item itemNome="Mercado" numero={12}/>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;