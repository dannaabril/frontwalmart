import React, { Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";

    class AgregarUsuarios extends Component{
        path = null
        url = [];
        idUsuario= null
        cedula = React.createRef();
        nombres= React.createRef();
        apellidos = React.createRef();
        email = React.createRef();
        cargo = React.createRef();
        clave = React.createRef();
        sede = React.createRef();
    state = {
            Usuarios:[],
            status:null
        }
    guardarUsuario = (e) => {
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




    axios.post("http://localhost:8080/api/v1/guardarUsuario",Usuario)
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
                <div class= "ListaUsuarios">
                    <h3>Agregar Usuario </h3>
                    <h6 class="campos"> Todos los campos marcados con * son obligatorios para la creación del tercero </h6>
                    
                    <form class="formulario" onSubmit = {this.guardarUsuario}>
                        
                            <div class="ctexto">
                                <label>Cedula (Id)</label>
                                <input class= "CajatxtM" required="required" type = "text" name = "id" ref={this.cedula} />
                            </div>
                            
                            <div class="ctexto">
                                <label>Nombres</label>
                                <input class= "CajatxtL" size="70" type = "text" name = "nombres" ref={this.nombres}/>
                            </div>
                        
                            <div class="ctexto">
                                <label>Apellidos</label>
                                <input class= "CajatxtL" size="70" type = "text" name = "apellidos" ref={this.apellidos}/>
                            </div>
                        
                            <div class="ctexto">
                                <label>Email</label>
                                <input class= "CajatxtM"  size="20"type = "text" name = "email" ref={this.email}/>
                            </div>
                                        
                        
                            <div class="ctexto">
                                <label>Cargo</label>
                                <input class= "CajatxtM"  type = "text" name = "Cargo" ref={this.cargo}/>
                            </div>
                        
                            <div class="ctexto">
                                <label>Clave</label>
                                <input class= "CajatxtL" size="70" type = "text" name = "clave" ref={this.clave}/>
                            </div>
                            
                            <div class="ctexto">
                                <label>Sede</label>
                                <input class= "CajatxtL" size="70" type = "text" name = "sede" ref={this.sede}/>
                            </div>

                        
                            <div class="botones">
                                <input class= "btnguardar" type = "submit" />
                                <a href="/Usuarios"  class= "btncancelar"> Cancelar </a>
                            </div>
                        
                    </form>
                </div>
            );
        }
    }
    export default AgregarUsuarios;