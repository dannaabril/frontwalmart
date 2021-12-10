import React, { cloneElement, Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";


class AgregarCliente extends Component{
    Cedula_cliente = React.createRef();
    direccion_cliente= React.createRef();
    email_cliente = React.createRef();
    nombre_cliente = React.createRef();
    telefono_cliente = React.createRef();
state = {
        clientes:[],
        status:null
    }
guardarCliente = (e) => {
    e.preventDefault();
        var cliente = {
            id:this.Cedula_cliente.current.value,
            nombrescliente:this.nombre_cliente.current.value,
            direccion:this.direccion_cliente.current.value,
            email:this.email_cliente.current.value,
            telefono:this.telefono_cliente.current.value,
        }




axios.post("http://localhost:8080/api/v1/guardarCliente",cliente)
            .then(res=>{
                this.setState({
                    status:"success"
                })
            });
        }
    
        render(){
            if(this.state.status === "success"){
                return <Navigate to ="/Clientes" />
        }
    
    

        return(
            <div class= "Cajageneral">
                <h3>Agregar Cliente </h3>
                <h6 class="campos"> Todos los campos marcados con * son obligatorios para la creación del tercero </h6>
                
                <form class="formulario" onSubmit = {this.guardarCliente}>
                    
                        <div class="ctexto">
                            <label>Cedula cliente</label>
                            <input class= "CajatxtM" required="required" type = "text" name = "Cedula" ref={this.Cedula_cliente}/>
                        </div>
                        
                        <div class="ctexto">
                            <label>Nombre Cliente</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "nombrescliente" ref={this.nombre_cliente}/>
                        </div>
                    
                        <div class="ctexto">
                            <label>Dirección</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "direccion" ref={this.direccion_cliente}/>
                        </div>
                    
                        <div class="ctexto">
                            <label>Correo Electrónico</label>
                            <input class= "CajatxtM"  size="20"type = "text" name = "email" ref={this.email_cliente}/>
                        </div>
                                       
                    
                        <div class="ctexto">
                            <label>Telefono</label>
                            <input class= "CajatxtM"  type = "text" name = "telefono" ref={this.telefono_cliente}/>
                        </div>
                        
                        <div class="botones">
                            <input class= "btnguardar"  type = "submit" />
                            
                            <a href="/Clientes"  class= "btncancelar"> Cancelar </a>
                        </div>
                    
                </form>
            </div>
        );
    }
}
export default AgregarCliente;