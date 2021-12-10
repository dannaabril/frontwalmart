import React, { Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";
class EditarProveedor extends Component {
  path = null;
  url = [];
  proveedorId = null;
  id = React.createRef();

  state = {
    proveedor: [],
    status: null,
  };

  componentWillMount() {
    this.path = window.location.pathname;
    this.url = this.path.split("/");
    console.log(this.url);
    this.proveedorId = this.url[2];
    this.getProveedor(this.proveedorId);
  }

  getProveedor = (id) => {
    axios
      .get("http://localhost:8080/api/v1/mostrarCliente/" + id)
      .then((res) => {
        this.setState({
          proveedor: res.data,
        });
        console.log(res.data);
      });
  };

  guardarProveedor = (e) => {
    e.preventDefault();
    var proveedor = {
      id: this.nit.current.value,
      nombredelproveedor: this.proveedor.current.value,
      direccion: this.direccion_proveedor.current.value,
      ciudad: this.ciudad_proveedor.current.value,
      telefono: this.telefono_proveedor.current.value,
      email: this.email_proveedor.current.value,
    };

    axios
      .put("http://localhost:8080/api/v1/actualizarProveedor", proveedor)
      .then((res) => {
        this.setState({
          status: "success",
        });
      });
  };
}

export default EditarProveedor;
