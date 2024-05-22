import "./CategoriaItem.css";
import { FaRegTrashCan } from "react-icons/fa6";

function CategoriaItem({ titulo, id, deletarTarefa }) {
    return (
        <div className="categoria-item">
            <p>{titulo}</p>
            <button onClick={() => deletarTarefa(id)}>
                <FaRegTrashCan className="lixeira"/>
            </button>
        </div>
    )
}

export default CategoriaItem;