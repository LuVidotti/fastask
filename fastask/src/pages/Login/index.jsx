import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return(
        <div className="login-container">
            <div className="login-container__card">
                <h1>Login</h1>
                <form>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail"/>

                    <label htmlFor="senha">Senha</label>
                    <input type="password" placeholder="Digite sua senha"/>

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