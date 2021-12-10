import React, { cloneElement, Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";


class AgregarProducto extends Component{
    Codigo_producto = React.createRef();
    Nombre_producto= React.createRef();
    Nit_proveedor = React.createRef();
    PrecioCompra_producto = React.createRef();
    ivaCompra_producto = React.createRef();
    precioVenta_producto = React.createRef();
state = {
        productos:[],
        status:null
    }
guardarProducto = (e) => {
    e.preventDefault();
        var productos = {
            codigoProducto:this.Codigo_producto.current.value,
            nombre_producto:this.Nombre_producto.current.value,
            nit_proveedor:this.Nit_proveedor.current.value,
            precio_compra:this.PrecioCompra_producto.current.value,
            iva_compra:this.ivaCompra_producto.current.value,
            precio_venta:this.precioVenta_producto.current.value,
        }




axios.post("http://localhost:8080/api/v1/guardarProductos",productos)
            .then(res=>{
                this.setState({
                    status:"success"
                })
            });
        }
    
        render(){
            if(this.state.status === "success"){
                return <Navigate to ="/Productos" />
        }
    
    

        return(
            <div class= "Cajageneral">
                <h3>Agregar Cliente </h3>
                <h6 class="campos"> Todos los campos marcados con * son obligatorios para la creación del tercero </h6>
                
                <form class="formulario" onSubmit = {this.guardarProducto}>
                    
                        <div class="ctexto">
                            <label>Codigo Producto</label>
                            <input class= "CajatxtM" required="required" type = "text" name = "Codigoproducto" ref={this.Codigo_producto}/>
                        </div>
                        
                        <div class="ctexto">
                            <label>Nombre Producto</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "nombresproducto" ref={this.Nombre_producto}/>
                        </div>
                    
                        <div class="ctexto">
                            <label>NIT Proveedor</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "nitproveedor" ref={this.Nit_proveedor}/>
                        </div>
                    
                        <div class="ctexto">
                            <label>Precio Compra</label>
                            <input class= "CajatxtM"  size="20"type = "text" name = "preciocompra" ref={this.PrecioCompra_producto}/>
                        </div>
                                       
                    
                        <div class="ctexto">
                            <label>Iva Compra</label>
                            <input class= "CajatxtM"  type = "text" name = "ivacompra" ref={this.ivaCompra_producto}/>
                        </div>

                        <div class="ctexto">
                            <label>Precio Venta</label>
                            <input class= "CajatxtM" type="text" name="precioventa" ref={this.precioVenta_producto}/>

                        </div>
                        
                        <div class="botones">
                            <input class= "btnguardar"  type = "submit" />
                            
                            <a href="/Productos"  class= "btncancelar"> Cancelar </a>
                        </div>
                    
                </form>
            </div>
        );
    }
}
export default AgregarProducto;