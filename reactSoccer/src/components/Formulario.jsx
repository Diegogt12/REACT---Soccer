import { useState } from "react";
import "./Formulario.css"
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/images/logo2.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";



const Formulario = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        const res = await login(form);
        if (res && res.id) {
            sessionStorage.setItem("userName", res.nombre);
            navigate("/home");
        } else {
            setError(true);
        }
    }





    return (
        <div className="container">
            <aside className="aside">
                <div className="aside__container">
                    <img className="aside__img" src={logo2} alt="Gestor logo" />
                    <h1 className="aside__title">Gestor Online de Fútbol Ribera</h1>
                    <h2 className="aside__subtitle">
                        Gestión de temporadas, equipos y plantillas
                    </h2>
                </div>
            </aside>

            <section className="section-forms">
                <section id="section_login" className="section-login">
                    <form id="form_login" className="form_login" noValidate onSubmit={handleSubmit}>
                        <div className="form__group">
                            <label className="form__label" htmlFor="login_user">email</label>
                            <input
                                id="login_user"
                                className="form__input"
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                onChange={handleChange}
                            />
                            <p id="error_user" className="error"></p>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="login_password">contraseña</label>

                            <div className="password-container">
                                <input
                                    id="login_password"
                                    className="form__input"
                                    type="password"
                                    placeholder="Contraseña"
                                    name="password"
                                    minLength={8}
                                    title="La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial"
                                    onChange={handleChange}
                                />
                            </div>
                            <p id="error_password" className="error"></p>
                        </div>

                        <button id="btn_login" className="form__button" type="submit">
                            Iniciar sesión
                        </button>
                        {error && <p id="error_login" className="error">Credenciales invalidas</p>}
                    </form>
                </section>
            </section>
        </div>
    )
}


export default Formulario;