import React, { Component, createRef, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router";
import swal from "sweetalert2";

class Ventas extends Component {
  constructor(props) {
    super(props);
    // this.getId = this.getId.bind(this);
    this.idRef = React.createRef();
    this.state = {
      status: "",
      ventas: "",
      clientes: "",
      productos: "",
      productos2: "",
      productos3: "",
      id: "",
      pro1: "",
      pro2: "",
      pro3: "",
      cantidad1: "",
      cantidad2: "",
      cantidad3: "",
      respuesta: "",
    };
  }

  txtCedula = React.createRef();
  txtCliente = React.createRef();
  txtConsecutivo = React.createRef();
  txtCodProd1 = React.createRef();
  txtCodProd2 = React.createRef();
  txtCodProd3 = React.createRef();
  txtNombrePro1 = React.createRef();
  txtNombrePro2 = React.createRef();
  txtNombrePro3 = React.createRef();
  txtCantidad1 = React.createRef();
  txtCantidad2 = React.createRef();
  txtCantidad3 = React.createRef();
  txtValorTotal1 = React.createRef();
  txtValorTotal2 = React.createRef();
  txtValorTotal3 = React.createRef();
  txtTotalVenta = React.createRef();
  txtTotalIva = React.createRef();
  txtTotalConIva = React.createRef();
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

  actualizarProducto = (e) => {
    this.setState({
      pro1: e.target.value,
    });
    console.log(this.state.pro1);
  };

  actualizarProducto2 = (e) => {
    this.setState({
      pro2: e.target.value,
    });
    console.log(this.state.pro1);
  };

  actualizarProducto3 = (e) => {
    this.setState({
      pro3: e.target.value,
    });
    console.log(this.state.pro1);
  };

  actualizarcantidad1 = (e) => {
    this.setState({
      cantidad1: e.target.value,
    });
    console.log(this.state.cantidad1);
  };

  actualizarcantidad2 = (e) => {
    this.setState({
      cantidad2: e.target.value,
    });
    console.log(this.state.cantidad2);
  };

  actualizarcantidad3 = (e) => {
    this.setState({
      cantidad3: e.target.value,
    });
    console.log(this.state.cantidad3);
  };

  getProductos = () => {
    axios
      .get("http://localhost:8080/api/v1/mostrarProductos/" + this.state.pro1)
      .then((res) => {
        this.setState({
          productos: res.data,
        });
        console.log(res.data);
      });
  };

  getProductos2 = () => {
    axios
      .get("http://localhost:8080/api/v1/mostrarProductos/" + this.state.pro2)
      .then((res) => {
        this.setState({
          productos2: res.data,
        });
        console.log(res.data);
      });
  };

  getProductos3 = () => {
    axios
      .get("http://localhost:8080/api/v1/mostrarProductos/" + this.state.pro3)
      .then((res) => {
        this.setState({
          productos3: res.data,
        });
        console.log(res.data);
      });
  };

  guardarVenta = (e) => {
    e.preventDefault();
    var venta = {
      codigo: 112,
      cedulaCliente: this.state.clientes.id,
      cedulaUsuario: this.txtCedula.current.value,
      valorTotalVenta: this.txtTotalVenta.current.value,
      valorIva: this.txtTotalIva.current.value,
      valorTotalMasIva: this.txtTotalConIva.current.value,
    };

    axios
      .post("http://localhost:8080/api/v1/registrarVenta", venta)
      .then((res) => {
        this.setState({
          status: "success",
          respuesta: res.data,
        });
      });
    window.location.reload(false);
  };

  render() {
    if (this.state.status === "success") {
      alert(this.state.respuesta);
    }
    return (
      <div className="contentVentas-main">
        <div class="form-group">
          <form>
            <div className="contentVentas-1">
              <span>Cedula: </span>
              <input
                type="text"
                value={this.state.id}
                onChange={this.actualizarEstado}
                ref={this.txtCedula}
                class="form-control"
              />
              <input
                type="button"
                value="consultar"
                onClick={this.getClientes}
              />
              <span>Cliente: </span>
              <input
                type="text"
                value={this.state.clientes.nombrescliente}
                ref={this.txtCliente}
                disabled
              />
              <span>Consec: </span>
              <input
                type="text"
                value={this.state.clientes.id}
                ref={this.txtConsecutivo}
                disabled
              />
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
                  <input
                    type="text"
                    value={this.state.pro1}
                    onChange={this.actualizarProducto}
                    ref={this.txtCodProd1}
                    id="1"
                  />
                  <input
                    type="button"
                    value="consultar"
                    onClick={this.getProductos}
                  />
                </div>
                <div className="sectionConstentVentas-3">
                  <input
                    type="text"
                    value={this.state.pro2}
                    onChange={this.actualizarProducto2}
                    ref={this.txtCodProd2}
                  />
                  <input
                    type="button"
                    value="consultar"
                    onClick={this.getProductos2}
                  />
                </div>
                <div className="sectionConstentVentas-3">
                  <input
                    type="text"
                    value={this.state.pro3}
                    onChange={this.actualizarProducto3}
                    ref={this.txtCodProd3}
                  />
                  <input
                    type="button"
                    value="consultar"
                    onClick={this.getProductos3}
                  />
                </div>
              </div>
              <div className="subContentVentas-3">
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={this.state.productos.nombre_producto}
                    ref={this.txtNombrePro1}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={this.state.productos2.nombre_producto}
                    ref={this.txtNombrePro1}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={this.state.productos3.nombre_producto}
                    ref={this.txtNombrePro1}
                  />
                </div>
              </div>
              <div className="subContentVentas-3">
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={this.state.cantidad1}
                    onChange={this.actualizarcantidad1}
                    ref={this.txtCantidad1}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={this.state.cantidad2}
                    onChange={this.actualizarcantidad2}
                    ref={this.txtCantidad2}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={this.state.cantidad3}
                    onChange={this.actualizarcantidad3}
                    ref={this.txtCantidad3}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <span>Total venta</span>
                </div>
                <div className="sectionConstentVentas-3-1">
                  <span>Total IVA</span>
                </div>
                <div className="sectionConstentVentas-3-1">
                  <span>Total con IVA</span>
                </div>
              </div>
              <div className="subContentVentas-3">
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={
                      this.state.cantidad1 * this.state.productos.precio_venta
                    }
                    ref={this.txtValorTotal1}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={
                      this.state.cantidad2 * this.state.productos2.precio_venta
                    }
                    ref={this.txtValorTotal2}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={
                      this.state.cantidad3 * this.state.productos3.precio_venta
                    }
                    ref={this.txtValorTotal3}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={
                      this.state.cantidad1 * this.state.productos.precio_venta +
                      this.state.cantidad2 *
                        this.state.productos2.precio_venta +
                      this.state.cantidad3 * this.state.productos3.precio_venta
                    }
                    ref={this.txtTotalVenta}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={
                      (this.state.cantidad1 *
                        this.state.productos.precio_venta +
                        this.state.cantidad2 *
                          this.state.productos2.precio_venta +
                        this.state.cantidad3 *
                          this.state.productos3.precio_venta) *
                      0.19
                    }
                    ref={this.txtTotalIva}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="text"
                    value={
                      (this.state.cantidad1 *
                        this.state.productos.precio_venta +
                        this.state.cantidad2 *
                          this.state.productos2.precio_venta +
                        this.state.cantidad3 *
                          this.state.productos3.precio_venta) *
                      1.19
                    }
                    ref={this.txtTotalConIva}
                  />
                </div>
                <div className="sectionConstentVentas-3-1">
                  <input
                    type="button"
                    value="Registrar"
                    onClick={this.guardarVenta}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Ventas;
