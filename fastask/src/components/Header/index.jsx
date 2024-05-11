import Logo from "../Logo";
import "./Header.css";
import Perfil from "../../assets/foto perfil.jpeg";

function Header() {
    return (
        <header className="cabecalho">
            <Logo />
            <div className="perfil-div">
                <h4>Luisinho</h4>
                <img src={Perfil} alt="Foto de perfil do usuario" />
            </div>
        </header>
    )
}

export default Header;