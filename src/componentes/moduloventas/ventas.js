import React, { Component, useState } from "react";
import axios from "axios";

class Ventas extends Component {
  constructor(props) {
    super(props);
    // this.getId = this.getId.bind(this);
    this.idRef = React.createRef();
    this.state = {
      clientes: [],
      id: "",
    };
  }

  id = React.createRef();

  getClientes = () => {
    axios
      .get("http://localhost:8080/api/v1/mostrarProveedor/" + this.state.id)
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

  render() {
    return (
      <div>
        <div className="contentVentas-1">
          <span>Cedula: </span>
          <input
            type="text"
            value={this.state.id}
            onChange={this.actualizarEstado}
          />
          <input type="button" value="consultar" onClick={this.getClientes} />
          <span>Cliente: </span>
          <input type="text" value={this.state.clientes.nombre_producto} />
          <span>Consec: </span>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Ventas;
