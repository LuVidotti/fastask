import "./Modal.css";

function Modal({ isOpen, fecharModal, setNomeLista, adicionarLista, inputValor }) {
    return (
        <div className={isOpen ? "modal" : "modal-fechado"}>
            <form onSubmit={(e) => adicionarLista(e)}>
                <h1>Criar lista</h1>
                <label htmlFor="lista">Lista</label>
                <input onChange={(e) => setNomeLista(e.target.value)} type="text" id="lista" placeholder="Digite o nome da lista que deseja adicionar" value={inputValor}/>
                <button className="add-lista" type="submit">Adicionar</button>
                <button onClick={(e) => fecharModal(e)} className="cancelar">Cancelar</button>
            </form>
        </div>
    )
}

export default Modal;