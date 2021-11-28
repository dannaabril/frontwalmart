import React from "react";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

class Proveedores extends Component{
    state = {
        proveedores:[],
        status:null
    }
    componentWillMount(){
        this.getProveedores();
    }
    getProveedores = () =>{
        axios.get("http://localhost:8080/api/v1/listarProveedores")
            .then(res =>{
                console.log(res.data);
                this.setState({
                    proveedores:res.data
                })
            });
    }
    
    
    borrarProveedor = (id) =>{
        axios.delete("http://localhost:8080/api/v1/eliminarProveedor/"+id)
            .then(res=>{
                this.setState({
                   status:"deleted"
                    
                })

            })

            window.location.reload(true);

            swal(
                "Proveedor Eliminado",
                "El proveedor ha sido eliminado",
                "success"
            )

    }
    
    
    
    render(){
        return(
            <div>
                <div class="encabezado">
                    <h1>Modulo de Proveedores</h1>
                    
                </div>

                <div class="encabezado">
                    <Link class="btngeneral" to = "/AgregarProveedores">Crear Nuevo Proveedor</Link>
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
                        {
                          this.state.proveedores.map((proveedores)=>{
                            return(
                                <React.Fragment>
                                    <tr>
                                        <td>{proveedores.id}</td>
                                        <td>{proveedores.nombredelproveedor}</td>
                                        <td>{proveedores.direccion}</td>
                                        <td>{proveedores.ciudad}</td>
                                        <td>{proveedores.telefono}</td>
                                        <td>{proveedores.email}</td>
                                        <td>
                                            <Link class="btnMultiple" to = {"/EditarProveedor/"+proveedores.id}>Editar</Link>
                                            <button class="btnMultiple"onClick ={
                                                ()=>{
                                                    this.borrarProveedor(proveedores.id)
                                                }
                                            }>
                                                Eliminar</button>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            )
                          })  
                        }
                    </tbody>
                </table>
            </div>
            
        );
    }
}
export default Proveedores;