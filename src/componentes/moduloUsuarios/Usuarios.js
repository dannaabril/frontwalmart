import React from "react";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

class Usuarios extends Component{
    state = {
        Usuarios:[],
        status:null
    }
    componentWillMount(){
        this.getUsuarios();
    }
    getUsuarios = () =>{
        axios.get("http://localhost:8080/api/v1/listarUsuario")
            .then(res =>{
                console.log(res.data);
                this.setState({
                    Usuarios:res.data
                })
            });
    }
    
    
    borrarUsuario = (idUsuario) =>{
        axios.delete("http://localhost:8080/api/v1/eliminarUsuario/"+idUsuario)
            .then(res=>{
                this.setState({
                   status:"deleted"
                    
                })

            })

            window.location.reload(true);

            swal(
                "Usuario Eliminado",
                "El Usuario ha sido eliminado",
                "success"
            )

    }
    
    
    
    render(){
        return(
            <div>
                <div class="encabezado">
                    <h1>Modulo de Usuarios</h1>
                    
                </div>

                <div class="encabezado">
                    <Link class="btngeneral" to = "/AgregarUsuario">Crear Nuevo Usuario</Link>
                </div>

                <table class="tablag">
                    <thead>
                        <tr>
                            <th>Cedula</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Email</th>
                            <th>Cargo</th>
                            <th>Clave</th>
                            <th>Sede</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          this.state.Usuarios.map((usuario)=>{
                            return(
                                <React.Fragment>
                                    <tr>
                                        <td>{usuario.idUsuario}</td>
                                        <td>{usuario.nombresUsuario}</td>
                                        <td>{usuario.apellidosUsuario}</td>
                                        <td>{usuario.emailUsuario}</td>
                                        <td>{usuario.cargoUsuario}</td>
                                        <td>{usuario.claveUsuario}</td>
                                        <td>{usuario.sedeUsuario}</td>
                                        <td>
                                            <Link class="btnMultiple" to = {"/EditarUsuario/"+usuario.idUsuario}>Editar</Link>
                                            <button class="btnMultiple"onClick ={
                                                ()=>{
                                                    this.borrarUsuario(usuario.idUsuario)
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
export default Usuarios;