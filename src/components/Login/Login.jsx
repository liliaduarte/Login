import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css"

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados:" + username + "-" + password);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input
                        type="email"
                        placeholder="E-mail"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembrar login?
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>
                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="#">Criar conta</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
