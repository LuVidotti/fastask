import "./Modal.css";

function Modal({ isOpen, fecharModal }) {
    return (
        <div className={isOpen ? "modal" : "modal-fechado"}>
            <form>
                <h1>Criar lista</h1>
                <label htmlFor="lista">Lista</label>
                <input type="text" id="lista" placeholder="Digite o nome da lista que deseja adicionar" />
                <button className="add-lista" type="submit">Adicionar</button>
                <button onClick={(e) => fecharModal(e)} className="cancelar">Cancelar</button>
            </form>
        </div>
    )
}

export default Modal;