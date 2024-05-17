import { Link } from "react-router-dom";
import "./Login.css";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const urlApi = "http://localhost:3000";
    const navegar = useNavigate();

    function fazerLogin(e) {
        e.preventDefault();

        axios.post(`${urlApi}/usuarios/login`, {
            email: email,
            senha: senha
        }).then((resposta) => {
            console.log(resposta)
            toast.success(resposta.data.message);
            const token = resposta.data.token;
            localStorage.setItem("token", token);
            navegar("/");
        }).catch((erro) => {
            console.log(erro)
            toast.error(erro.response.data.message);
        })
    }

    return(
        <div className="login-container">
            <div className="login-container__card">
                <h1>Login</h1>
                <form onSubmit={(e) => fazerLogin(e)}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="senha">Senha</label>
                    <input type="password" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)}/>

                    <button type="submit">Entrar</button>

                    <div className="criar-conta-area">
                        <p>Ainda não tem uma conta?</p>
                        <Link to="/criar-conta" className="criar-conta__link">Criar conta</Link>
                    </div>  
                </form>
            </div>
        </div>
    )
}

export default Login;