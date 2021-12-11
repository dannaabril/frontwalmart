import React from "react";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

class Proveedores extends Component {
  state = {
    proveedores: [],
    status: null,
  };
  componentWillMount() {
    this.getProveedores();
  }
  getProveedores = () => {
    axios.get("http://localhost:8080/api/v1/listarProveedores").then((res) => {
      console.log(res.data);
      this.setState({
        proveedores: res.data,
      });
    });
  };

  borrarProveedor = (id) => {
    axios
      .delete("http://localhost:8080/api/v1/eliminarProveedor/" + id)
      .then((res) => {
        this.setState({
          status: "deleted",
        });
      });

    window.location.reload(true);

    swal("Proveedor Eliminado", "El proveedor ha sido eliminado", "success");
  };

  render() {
    return (
      <div class="principal">
        <div class="encabezado">
          <h1>Modulo de Proveedores</h1>
        </div>

        <div class="encabezado">
          <Link class="btngeneral" to="/AgregarProveedores">
            Crear Nuevo Proveedor
          </Link>
        </div>

        <table class="tablag">
          <thead>
            <tr>
              <th>NIT</th>
              <th>Razon Social</th>
              <th>Direccion</th>
              <th>Ciudad</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.proveedores.map((proveedores) => {
              return (
                <React.Fragment>
                  <tr>
                    <td><center>{proveedores.id}</center></td>
                    <td><center>{proveedores.nombredelproveedor}</center></td>
                    <td><center>{proveedores.direccion}</center></td>
                    <td><center>{proveedores.ciudad}</center></td>
                    <td><center>{proveedores.telefono}</center></td>
                    <td><center>{proveedores.email}</center></td>
                    <td>
                      <center>
                        <Link
                          class="btnMultiple1"
                          to={"/EditarProveedor/" + proveedores.id}
                        >
                          Editar
                        </Link>
                        <button
                          class="btnMultiple2"
                         onClick={() => {
                           this.borrarProveedor(proveedores.id);
                         }}
                       >
                         Eliminar
                        </button>
                      </center>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Proveedores;
