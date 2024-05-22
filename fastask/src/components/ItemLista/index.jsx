import { NavLink } from "react-router-dom";
import "./ItemLista.css";

function ItemLista({ itemNome, excluirLista, idLista }) {
    return (
        <li>
            <NavLink 
                to={`/listas/${idLista}`}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "lista-item"
                }
            >
                <p>{itemNome}</p>
                <button onClick={() => excluirLista(idLista)} className="excluir-lista">Excluir</button>
            </NavLink>
        </li>
    )
}

export default ItemLista;