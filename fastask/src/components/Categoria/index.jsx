import "./Categoria.css";

function Categoria({ children }) {
    return (
        <h4 className="categoria-nome">{children}</h4>
    )
}

export default Categoria;