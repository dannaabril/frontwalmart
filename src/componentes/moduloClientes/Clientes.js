import React from "react";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

class Clientes extends Component{
    state = {
        clientes:[],
        status:null
    }

    componentWillMount(){
        this.getClientes();
    }

    getClientes =() =>{
        axios.get("http://localhost:8080/api/v1/listarCliente")
        .then(res =>{
            console.log(res.data);
            this.setState({
                clientes:res.data
            })
        });

    }

    borrarCliente =(id) =>{
        axios.delete("http://localhost:8080/api/v1/eliminarCliente/"+id)
        .then(res=>{
            this.setState({
                status:"deleted"
            })
        })
        window.location.reload(true);
        Swal(
            "Proveedor Eliminado",
            "El proveedor ha sido eliminado",
            "success"
        );
    }
    render(){
        return(
            <div class="principal">
                <div class="encabezado">
                    <h1>Modulo de Clientes</h1>

                </div>
                
                <div class="encabezado">
                    <Link class="btngeneral" to = "/AgregarCliente">Crear Nuevo Cliente</Link>
                </div>

                <div >
                <table class="tablag">
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombre Completo</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Correo Electrónico</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.clientes.map((clientes)=>{
                               return(
                                   <React.Fragment>
                                       <tr>
                                        <td><center>{clientes.id}</center></td>
                                        <td><center>{clientes.nombrescliente}</center></td>
                                        <td><center>{clientes.direccion}</center></td>
                                        <td><center>{clientes.telefono}</center></td>
                                        <td><center>{clientes.email}</center></td>
                                        <td>
                                            <center>
                                                <Link
                                                    class="btnMultiple1"
                                                    to={"/EditarCliente/" + clientes.id}
                                                >
                                                    Editar
                                                </Link>
                                                <button
                                                    class="btnMultiple2"
                                                    onClick={() => {
                                                        this.borrarCliente(clientes.id);
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
        </div>
    );
}
}

    
export default Clientes;