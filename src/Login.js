import React, { Component } from "react";
import axios from "axios";
import Router from "./Router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datoslogin: "",
      status: null,
    };
  }

  path = null;
  url = [];
  proveedorId = null;
  nombres = React.createRef();
  clave = React.createRef();

  enviologin = (e) => {
    e.preventDefault();
    var ingreso = {
      nombresUsuario: this.nombres.current.value,
      claveUsuario: this.clave.current.value,
    };

    axios.post("http://localhost:8080/api/v1/login", ingreso).then((res) => {
      this.setState({
        datoslogin: res.data,
        status: "success",
      });
      //   console.log(res.data);
    });
    // localStorage.setItem("sede", this.state.datoslogin.nombresUsuario);
    // console.log(this.state.datoslogin.nombresUsuario);
  };

  render() {
    if (this.state.datoslogin === "EXITOSO") {
      return <Router />;
    } else {
      alert("Credenciales Incorrectas");
    }

    return (
      <div className="loginfor">
        <div className="formu">
          <h4>DATOS DE INGRESO TIENDA WALMART</h4>

          <form onSubmit={this.enviologin}>
            <div>
              <label className="label">Nombre de Usuario</label>
              <input
                required="required"
                class="login-username"
                type="text"
                name="nombresUsuario"
                ref={this.nombres}
              />
            </div>
            <div>
              <label className="label">Contraseña</label>
              <input
                type="password"
                required="required"
                class="login-password"
                name="claveUsuario"
                ref={this.clave}
              />
            </div>

            <div>
              <input className="btngeneral" type="submit" />
              <a href="/Login" className="btngeneral">
                {" "}
                Cancelar{" "}
              </a>
            </div>
          </form>
        </div>

        <div className="login"></div>
      </div>
    );
  }
}

export default Login;
