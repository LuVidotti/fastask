import { NavLink } from "react-router-dom";
import "./Item.css";

function Item({ itemNome, href }) {
    return (
        <li>
            <NavLink 
                to={href}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "lista-item"
                }
            >
                <p>{itemNome}</p>
            </NavLink>
        </li>
    )
}

export default Item;