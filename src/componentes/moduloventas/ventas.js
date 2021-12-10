import React, { Component, useState } from "react";
import axios from "axios";

class Ventas extends Component {
  constructor(props) {
    super(props);
    // this.getId = this.getId.bind(this);
    this.idRef = React.createRef();
    this.state = {
      clientes: "",
      id: "",
    };
  }

  id = React.createRef();

  getClientes = () => {
    axios
      .get("http://localhost:8080/api/v1/mostrarCliente/" + this.state.id)
      .then((res) => {
        this.setState({
          clientes: res.data,
        });
        console.log(res.data);
      });
  };

  actualizarEstado = (e) => {
    this.setState({
      id: e.target.value,
    });
    console.log(this.state.id);
  };

  // mostrarCliente = () => {
  //     this.state.clientes.map(item => )
  // };

  render() {
    return (
      <div className="contentVentas-main">
        <div className="contentVentas-1">
          <span>Cedula: </span>
          <input
            type="text"
            value={this.state.id}
            onChange={this.actualizarEstado}
          />
          <input type="button" value="consultar" onClick={this.getClientes} />
          <span>Cliente: </span>
          <input
            type="text"
            value={this.state.clientes.nombrescliente}
            disabled
          />
          <span>Consec: </span>
          <input type="text" value={this.state.clientes.id} disabled />
        </div>
        <div className="contentVentas-2">
          <h2>Cod. Producto</h2>
          <h2>Nombre Producto</h2>
          <h2>Cantidad</h2>
          <h2>Valor Total</h2>
        </div>
        <div className="contentVentas-3">
          <div className="subContentVentas-3">
            <div className="sectionConstentVentas-3">
              <input type="text" />
              <input type="button" value="consultar" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ventas;
