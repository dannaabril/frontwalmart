  import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Proveedores from "./componentes/moduloproveedores/Proveedores";
import AgregarProveedores from "./componentes/moduloproveedores/AgregarProveedores";
import EditarProveedor from "./componentes/moduloproveedores/EditarProveedor";
import Ventas from "./componentes/moduloventas/ventas";
import Usuarios from "./componentes/moduloUsuarios/Usuarios";
import AgregarUsuario from "./componentes/moduloUsuarios/AgregarUsuarios";
import EditarUsuario from "./componentes/moduloUsuarios/EditarUsuario";
import Productos from "./componentes/moduloProductos/Productos";
import AgregarProducto from "./componentes/moduloProductos/AgregarProducto";
import EditarProducto from "./componentes/moduloProductos/EditarProducto";
import Clientes from "./componentes/moduloClientes/Clientes";
import AgregarCliente from "./componentes/moduloClientes/AgregarCliente";
import EditarCliente from "./componentes/moduloClientes/EditarCliente";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <body class="body">
          <header className="App-header">
            <nav class="mostrar">
              <div id="mostrarmenu"></div>

              <ul class="menu">
                <li>
                  {" "}
                  <NavLink to="/Usuarios" activeClassName="active">
                    {" "}
                    Usuarios{" "}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/Productos" activeClassName="active">
                    {" "}
                    Productos{" "}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/Ventas" activeClassName="active">
                    {" "}
                    Ventas{" "}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/Clientes" activeClassName="active">
                    {" "}
                    Cientes{" "}
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/proveedores" activeClassName="active">
                    Proveedores
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </body>
        <Routes>
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/AgregarUsuario" element={<AgregarUsuario />} />
          <Route path="/EditarUsuario/:id" element={<EditarUsuario />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/AgregarProducto" element={<AgregarProducto />} />
          <Route path="/EditarProducto/:codigoProducto" element={<EditarProducto />} />
          <Route path="/Clientes" element={<Clientes />} />
          <Route path="/AgregarCliente" element={<AgregarCliente />} />
          <Route path="/EditarCliente/:id" element={<EditarCliente />} />
          <Route path="/Proveedores" element={<Proveedores />} />
          <Route path="/AgregarProveedores" element={<AgregarProveedores />} />
          <Route path="/EditarProveedor/:id" element={<EditarProveedor />} />
          <Route path="/Ventas" element={<Ventas />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default Router;
