import "./CategoriaItem.css";
import { FaRegTrashCan } from "react-icons/fa6";

function CategoriaItem({ titulo }) {
    return (
        <div className="categoria-item">
            <p>{titulo}</p>
            <button>
                <FaRegTrashCan  className="lixeira"/>
            </button>
        </div>
    )
}

export default CategoriaItem;