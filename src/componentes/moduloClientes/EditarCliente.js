import React, { Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";

class EditarCliente extends Component{
    
    path = null
    url = [];
    clienteId= null
    cedula = React.createRef();
    nombre_cliente= React.createRef();
    direccion_cliente = React.createRef();
    telefono_cliente = React.createRef();
    email_cliente = React.createRef();
    
    state = {
            cliente:[],
            status:null
        }

    componentWillMount(){
        this.path = window.location.pathname;
        this.url = this.path.split("/");
        console.log(this.url);
        this.clienteId = this.url[2];
        this.getCliente(this.clienteId);

    }

    getCliente = (id) => {
        axios.get("http://localhost:8080/api/v1/mostrarCliente/"+id)
            .then(res =>{
                this.setState({
                    cliente:res.data
                })
                console.log(res.data)
                })

    }

    guardarCliente = (e) => {
        e.preventDefault();
            var cliente = {
                
                id:this.cedula.current.value,
                nombrescliente:this.nombre_cliente.current.value,
                direccion:this.direccion_cliente.current.value,
                email:this.email_cliente.current.value,
                telefono:this.telefono_cliente.current.value,
            }

    axios.put("http://localhost:8080/api/v1/actualizarCliente",cliente)
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
                <div>
                    <h3>Editar Cliente</h3>
                    <h6 class="campos"> Todos los campos marcados con * son obligatorios para la creación del tercero </h6>

                    <form class="formulario" onSubmit = {this.guardarCliente}>
                        <div class="ctexto">
                            <label>Cedula del Cliente</label>
                            <input class= "CajatxtM" required="required" type = "text" name = "cedula" ref={this.cedula} defaultValue={this.state.cliente.id}/>
                        </div>
                        <div class="ctexto">
                            <label>Nombre Cliente</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "nombrescliente" ref={this.nombre_cliente} defaultValue={this.state.cliente.nombrescliente}/>
                        </div>
                        <div class="ctexto">
                            <label>Direccion</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "direccion" ref={this.direccion_cliente}  defaultValue={this.state.cliente.direccion}/>
                        </div>
                        <div class="ctexto">
                            <label>Correo Electrónico</label>
                            <input class= "CajatxtM"  size="20" type = "text" name = "email" ref={this.email_cliente}  defaultValue={this.state.cliente.email}/>
                        </div>
                        <div class="ctexto">
                            <label>Telefono</label>
                            <input class= "CajatxtM"  type = "text" name = "telefono" ref={this.telefono_cliente}  defaultValue={this.state.cliente.telefono}/>
                        </div>
                        <div>
                            <input class= "btnguardar" type = "submit" />
                            <a href="/Clientes"  class= "btncancelar"> Cancelar </a>
                        </div>
                    </form>
                </div>
            );
        }
    }


    export default EditarCliente;