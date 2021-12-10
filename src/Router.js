import React from "react";
import { Component } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Proveedores from "./componentes/moduloproveedores/Proveedores";
import AgregarProveedores from "./componentes/moduloproveedores/AgregarProveedores";
import EditarProveedor from "./componentes/moduloproveedores/EditarProveedor";


class Router extends Component{
    render(){
        return(
            <BrowserRouter>

            <body class="body">
                <header className="App-header">
                
                    
                    <nav class="mostrar">

                        <div id="mostrarmenu"></div>

                        <ul class="menu">
                        <li> <NavLink to = "" activeClassName = "active"> Usuarios </NavLink></li> 
                        <li> <NavLink to = "" activeClassName = "active"> Clientes </NavLink></li> 
                        <li> <NavLink to = "" activeClassName = "active"> Ventas </NavLink></li>   
                        <li> <NavLink to = "" activeClassName = "active"> Productos </NavLink></li> 
                        <li> <NavLink to = "/proveedores" activeClassName = "active">Proveedores</NavLink></li>
                        
                           
                        </ul>
                    </nav>
                </header>
            </body>
                <Routes>
                    
                    <Route path = "/Proveedores" element = {<Proveedores />} />
                    <Route path = "/AgregarProveedores" element = {<AgregarProveedores/>} />
                    <Route path = "/EditarProveedor/:id" element = {<EditarProveedor/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}
export default Router;