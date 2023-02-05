import logoIMG from "./assets/logo.png";
import wrapIMG from "./assets/wrap.png";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <div className="imgLogin-header">
              <img src={logoIMG} alt="Logo" />
            </div>
            <p className="login-form-title">
              Bem Vindo ao <span className="color-orange">painel</span>
            </p>

            <div className="wrap-input">
              <input type="email" placeholder="Digite seu e-mail"></input>
            </div>

            <div className="wrap-input">
              <input type="password" placeholder="Digite sua senha"></input>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Acessar</button>
            </div>
          </form>
          <div className="computer-img">
            <img src={wrapIMG} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
