import React, { Component } from "react";
import { Navigate } from "react-router";
import axios from "axios";

class EditarProducto extends Component{
    
    path = null
    url = [];
    PoductoId= null
    codigo_producto = React.createRef();
    nombre_Producto= React.createRef();
    Nitproveedor = React.createRef();
    Preciocompra_producto = React.createRef();
    Iva_compra = React.createRef();
    PrecioVenta_producto = React.createRef();
    
    state = {
            producto:[],
            status:null
        }

    componentWillMount(){
        this.path = window.location.pathname;
        this.url = this.path.split("/");
        console.log(this.url);
        this.PoductoId = this.url[2];
        this.getCliente(this.PoductoId);

    }

    getCliente = (codigoProducto) => {
        axios.get("http://localhost:8080/api/v1/mostrarProductos/"+codigoProducto)
            .then(res =>{
                this.setState({
                    producto:res.data
                })
                console.log(res.data)
                })

    }

    guardarProducto = (e) => {
        e.preventDefault();
            var producto = {
                
                codigoProducto:this.codigo_producto.current.value,
                nombre_producto:this.nombre_Producto.current.value,
                nit_proveedor:this.Nitproveedor.current.value,
                precio_compra:this.Preciocompra_producto.current.value,
                iva_compra:this.Iva_compra.current.value,
                precio_venta:this.PrecioVenta_producto.current.value,
            }

    axios.put("http://localhost:8080/api/v1/actualizarProductos",producto)
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
                <div>
                    <h3>Editar Productos</h3>
                    <h6 class="campos"> Todos los campos marcados con * son obligatorios para la creación del tercero </h6>

                    <form class="formulario" onSubmit = {this.guardarProducto}>
                        <div class="ctexto">
                            <label>Codigo Producto</label>
                            <input class= "CajatxtM" required="required" type = "text" name = "codigoProducto" ref={this.codigo_producto} defaultValue={this.state.producto.codigoProducto}/>
                        </div>
                        <div class="ctexto">
                            <label>Nombre Producto</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "nombresproducto" ref={this.nombre_Producto} defaultValue={this.state.producto.nombre_producto}/>
                        </div>
                        <div class="ctexto">
                            <label>NIT proveedor</label>
                            <input class= "CajatxtL" size="70" type = "text" name = "nitproveedor" ref={this.Nitproveedor}  defaultValue={this.state.producto.nit_proveedor}/>
                        </div>
                        <div class="ctexto">
                            <label>Precio Compra</label>
                            <input class= "CajatxtM"  size="20" type = "text" name = "preciocompra" ref={this.Preciocompra_producto}  defaultValue={this.state.producto.precio_compra}/>
                        </div>
                        <div class="ctexto">
                            <label>IVA Compra</label>
                            <input class= "CajatxtM"  type = "text" name = "ivacompra" ref={this.Iva_compra}  defaultValue={this.state.producto.iva_compra}/>
                        </div>
                        <div class="ctexto">
                            <label>Precio Venta</label>
                            <input class= "CajatxtM"  type = "text" name = "precioventa" ref={this.PrecioVenta_producto}  defaultValue={this.state.producto.precio_venta}/>
                        </div>
                        <div>
                            <input class= "btnguardar" type = "submit" />
                            <a href="/Productos"  class= "btncancelar"> Cancelar </a>
                        </div>
                    </form>
                </div>
            );
        }
    }


    export default EditarProducto;