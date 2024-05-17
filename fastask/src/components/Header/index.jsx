import Logo from "../Logo";
import "./Header.css";
import Perfil from "../../assets/foto perfil.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header() {
    const [user, setUser] = useState(null);
    const urlApi = "http://localhost:3000";
    const navegar = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`${urlApi}/usuarios/perfil`, {
            headers: {
                Authorization: token
            }
        }).then((user) => {
            console.log(user);
        }).catch((erro) => {
            console.log(erro);
            navegar("/login");
        })
    }, [user])

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