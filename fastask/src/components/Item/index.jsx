import { NavLink } from "react-router-dom";
import "./Item.css";

function Item({ itemNome, numero, href }) {
    return (
        <li>
            <NavLink 
                to={href}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "lista-item"
                }
            >
                <p>{itemNome}</p>
                <span>{numero}</span>
            </NavLink>
        </li>
    )
}

export default Item;