import "./Form.css";
import { FaCirclePlus } from "react-icons/fa6";

function Form({ setTarefa, adicionarTarefa, inputValor }) {
    return (
        <form className="form" onSubmit={(e) => adicionarTarefa(e)}>
            <div className="input-caixa">
                <input type="text" placeholder="Crie uma nova tarefa" onChange={(e) => setTarefa(e.target.value)} value={inputValor}/>
                <button type="submit">
                    <FaCirclePlus  className="form__icon"/>
                </button>
            </div>
        </form>
    )
}

export default Form;