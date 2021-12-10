import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Proveedores from "./componentes/moduloproveedores/Proveedores";
import AgregarProveedores from "./componentes/moduloproveedores/AgregarProveedores";
import EditarProveedor from "./componentes/moduloproveedores/EditarProveedor";
import Ventas from "./componentes/moduloventas/ventas";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App-header">
          <nav class="mostrar">
            <ul class="menu">
              <li>
                <a href="/Proveedores" activeClassName="active">
                  Proveedores
                </a>
              </li>
            </ul>
            <ul class="menu">
              <li>
                <a href="/Ventas" activeClassName="active">
                  Ventas
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
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
