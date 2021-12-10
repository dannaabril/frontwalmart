import React, { Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";

class AgregarProveedores extends Component{
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




    axios.post("http://localhost:8080/api/v1/guardarProveedor",proveedor)
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
                <h3>Agregar Proveedor </h3>
                <h6 class="campos"> Todos los campos marcados con * son obligatorios para la creación del tercero </h6>
                
                <form class="formulario" onSubmit = {this.guardarProveedor}>
                    
                        <div class="ctexto">
                            <label>NIT Proveedor</label>
                            <input class= "CajatxtM" required="required" type = "text" name = "Nit" ref={this.nit}/>
                        </div>
                        
                        <div class="ctexto">
                            <label>Razon Social</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "proveedor" ref={this.proveedor}/>
                        </div>
                    
                        <div class="ctexto">
                            <label>Direccion</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "direccion" ref={this.direccion_proveedor}/>
                        </div>
                    
                        <div class="ctexto">
                            <label>Ciudad</label>
                            <input class= "CajatxtM"  size="20"type = "text" name = "ciudad" ref={this.ciudad_proveedor}/>
                        </div>
                                       
                    
                        <div class="ctexto">
                            <label>Telefono</label>
                            <input class= "CajatxtM"  type = "text" name = "telefono" ref={this.telefono_proveedor}/>
                        </div>
                    
                        <div class="ctexto">
                            <label>Email</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "email" ref={this.email_proveedor}/>
                        </div>
                        

                    
                        <div class="botones">
                            <input class= "btnguardar" type = "submit" />
                            <a href="/Proveedores"  class= "btncancelar"> Cancelar </a>
                        </div>
                    
                </form>
            </div>
        );
    }
}
export default AgregarProveedores;