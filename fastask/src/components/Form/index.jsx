import "./Form.css";
import { FaCirclePlus } from "react-icons/fa6";

function Form() {
    return (
        <form className="form">
            <div className="input-caixa">
                <input type="text" placeholder="Crie uma nova tarefa"/>
                <button type="submit">
                    <FaCirclePlus  className="form__icon"/>
                </button>
            </div>
        </form>
    )
}

export default Form;