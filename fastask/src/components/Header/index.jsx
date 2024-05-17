import Logo from "../Logo";
import "./Header.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
    const [user, setUser] = useState({});
    const [foto, setFoto] = useState("");
    const urlApi = "http://localhost:3000";
    const navegar = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`${urlApi}/usuarios/perfil`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            setUser(resposta.data)
            setFoto(resposta.data.fotoPerfil.replace(/uploads\\/g, "").replace(/\\/g, "/"));
        }).catch((erro) => {
            console.log(erro);
            toast.error(erro.response.data.message);
            navegar('/login');
        })
    }, [user])

    function sair() {
        localStorage.removeItem("token");
        setUser({});
    }

    return (
        <header className="cabecalho">
            <Logo />
            <div className="perfil-div">
                <h4>{user.nome}</h4>
                <button onClick={() => sair()}>Sair</button>
                <img src={`${urlApi}/usuarios/imagem/${foto}`} alt="Foto de perfil do usuario" />
            </div>
        </header>
    )
}

export default Header;