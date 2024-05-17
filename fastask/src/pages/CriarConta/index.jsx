import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function CriarConta() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    const [foto, setFoto] = useState(null);
    const urlApi = "http://localhost:3000";
    const navegar = useNavigate();

    function criarConta(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('senha', senha);
        formData.append('senha2', senha2);
        formData.append('file', foto);

        axios.post(`${urlApi}/usuarios`, formData).then((resposta) => {
            console.log(resposta);
            toast.success(resposta.data.message);
            setTimeout(() => {
                navegar("/login");
            }, 3000)
        }).catch((erro) => {
            console.log(erro);
            toast.error(erro.response.data.message);
        })
    }

    return(
        <div>
            <div className="criar-conta-container">
                <div className="login-container__card">
                    <h1>Criar conta</h1>
                    <form onSubmit={(e) => criarConta(e)}>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}/>

                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="senha">Senha</label>
                        <input type="password" placeholder="Digite sua senha" id="senha" onChange={(e) => setSenha(e.target.value)}/>

                        <label htmlFor="senha2">Repetir senha</label>
                        <input type="password" placeholder="Repita a senha" id="senha2" onChange={(e) => setSenha2(e.target.value)}/>

                        <label htmlFor="foto">Foto de perfil</label>
                        <input type="file" id="foto" onChange={(e) => setFoto(e.target.files[0])}/>

                        <button type="submit">Criar conta</button>

                        <div className="criar-conta-area">
                            <p>Já tem uma conta?</p>
                            <Link to="/login" className="criar-conta__link">Fazer login</Link>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CriarConta;