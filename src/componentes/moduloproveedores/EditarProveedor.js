import React, { Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";
class EditarProveedor extends Component{
    
    path = null
    url = [];
    proveedorId= null
    nit = React.createRef();
    proveedor= React.createRef();
    direccion_proveedor = React.createRef();
    ciudad_proveedor = React.createRef();
    telefono_proveedor = React.createRef();
    email_proveedor = React.createRef();
    
    state = {
            proveedor:[],
            status:null
        }

    componentWillMount(){
        this.path = window.location.pathname;
        this.url = this.path.split("/");
        console.log(this.url);
        this.proveedorId = this.url[2];
        this.getProveedor(this.proveedorId);

    }

    getProveedor = (id) => {
        axios.get("http://localhost:8080/api/v1/mostrarProveedor/"+id)
            .then(res =>{
                this.setState({
                    proveedor:res.data
                })
                console.log(res.data)
                })

    }

    guardarProveedor = (e) => {
        e.preventDefault();
            var proveedor = {
                
                id:this.nit.current.value,
                nombredelproveedor:this.proveedor.current.value,
                direccion:this.direccion_proveedor.current.value,
                ciudad:this.ciudad_proveedor.current.value,
                telefono:this.telefono_proveedor.current.value,
                email:this.email_proveedor.current.value,
            }

    axios.put("http://localhost:8080/api/v1/actualizarProveedor",proveedor)
                .then(res=>{
                    this.setState({
                        status:"success"
                    })
                });
            }
        
            render(){
                if(this.state.status === "success"){
                    return <Navigate to ="/Proveedores" />
            }
            
            return(
                <div class= "Cajageneral">
                    <h3>Editar Proveedor</h3>
                    <h6 class="campos"> Todos los campos marcados con * son obligatorios para la creación del tercero </h6>

                    <form class="formulario" onSubmit = {this.guardarProveedor}>
                        <div class="ctexto">
                            <label>NIT Proveedor</label>
                            <input class= "CajatxtM" disabled="disabled"  required="required" type = "text" name = "Nit" ref={this.nit} defaultValue={this.state.proveedor.id}/>
                        </div>
                        <div class="ctexto">
                            <label>Razon Social</label>
                            <input class= "CajatxtL" size="65" type = "text" name = "proveedor" ref={this.proveedor} defaultValue={this.state.proveedor.nombredelproveedor}/>
                        </div>
                        <div class="ctexto">
                            <label>Direccion</label>
                            <input class= "CajatxtL" size="65" type = "text" name = "direccion" ref={this.direccion_proveedor}  defaultValue={this.state.proveedor.direccion}/>
                        </div>
                        <div class="ctexto">
                            <label>Ciudad</label>
                            <input class= "CajatxtM"  size="20" type = "text" name = "ciudad" ref={this.ciudad_proveedor}  defaultValue={this.state.proveedor.ciudad}/>
                        </div>
                        <div class="ctexto">
                            <label>Telefono</label>
                            <input class= "CajatxtM"  type = "text" name = "telefono" ref={this.telefono_proveedor}  defaultValue={this.state.proveedor.telefono}/>
                        </div>
                        <div class="ctexto">
                            <label>Email</label>
                            <input class= "CajatxtL" size="65" type = "text" name = "email" ref={this.email_proveedor}  defaultValue={this.state.proveedor.email}/>
                        </div>
                        <div>
                            <input class= "btnguardar" type = "submit" />
                            <a href="/Proveedores"  class= "btncancelar"> Cancelar </a>
                        </div>
                    </form>
                </div>
            );
        }
    }


    export default EditarProveedor;