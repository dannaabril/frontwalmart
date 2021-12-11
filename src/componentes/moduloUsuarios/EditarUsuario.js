import React, { Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";
class EditarUsuario extends Component{
    
    path = null
    url = [];
    usuarioId = null
    cedula = React.createRef();
    nombres = React.createRef();
    apellidos = React.createRef();
    email = React.createRef();
    cargo = React.createRef();
    clave = React.createRef();
    sede = React.createRef();
    
    state = {
            usuario:[],
            status:null
        }

    componentWillMount(){
        this.path = window.location.pathname;
        this.url = this.path.split("/");
        console.log(this.url);
        this.usuarioId = this.url[2];
        this.getusuario(this.usuarioId);

    }

    getusuario = (id) => {
        axios.get("http://localhost:8080/api/v1/mostrarUsuario/"+id)
            .then(res =>{
                this.setState({
                    usuario:res.data
                })
                console.log(res.data)
                })

    }

    guardarusuario = (e) => {
        e.preventDefault();
            var Usuario = {
                idUsuario:this.cedula.current.value,
                nombresUsuario:this.nombres.current.value,
                apellidosUsuario:this.apellidos.current.value,
                emailUsuario:this.email.current.value,
                cargoUsuario:this.cargo.current.value,
                claveUsuario:this.clave.current.value,
                sedeUsuario:this.sede.current.value,
            }

    axios.put("http://localhost:8080/api/v1/actualizarUsuario",Usuario)
                .then(res=>{
                    this.setState({
                        status:"success"
                    })
                });
            }
        
            render(){
                if(this.state.status === "success"){
                    return <Navigate to ="/Usuarios" />
            }
            
            return(
                <div>
                    <h3>Editar usuario</h3>
                    <h6 class="campos"> Todos los campos marcados con * son obligatorios para la creación del tercero </h6>

                    <form class="formulario" onSubmit = {this.guardarusuario}>
                        <div class="ctexto">
                            <label>Cedula</label>
                            <input class= "CajatxtM" required="required" type = "text" name = "idUsuario" ref={this.cedula} defaultValue={this.state.usuario.idUsuario}/>
                        </div>
                        <div class="ctexto">
                            <label>Nombres</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "nombres" ref={this.nombres} defaultValue={this.state.usuario.nombresUsuario}/>
                        </div>
                        <div class="ctexto">
                            <label>Apellidos</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "apellidos" ref={this.apellidos}  defaultValue={this.state.usuario.apellidosUsuario}/>
                        </div>
                        <div class="ctexto">
                            <label>Email</label>
                            <input class= "CajatxtM"  size="20" type = "text" name = "email" ref={this.email}  defaultValue={this.state.usuario.emailUsuario}/>
                        </div>
                        <div class="ctexto">
                            <label>Cargo</label>
                            <input class= "CajatxtM"  type = "text" name = "cargo" ref={this.cargo}  defaultValue={this.state.usuario.cargoUsuario}/>
                        </div>
                        <div class="ctexto">
                            <label>Clave</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "clave" ref={this.clave}  defaultValue={this.state.usuario.claveUsuario}/>
                        </div>
                        <div class="ctexto">
                            <label>Sede</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "sede" ref={this.sede}  defaultValue={this.state.usuario.sedeUsuario}/>
                        </div>
                        <div>
                            <input class= "btnguardar" type = "submit" />
                            <a href="/usuario"  class= "btncancelar"> Cancelar </a>
                        </div>
                    </form>
                </div>
            );
        }
    }

    export default EditarUsuario;