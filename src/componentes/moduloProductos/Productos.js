import React from "react";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

class Productos extends Component{
    state = {
        productos:[],
        status:null
    }

    componentWillMount(){
        this.getProductos();
    }

    getProductos =() =>{
        axios.get("http://localhost:8080/api/v1/listarProductos")
        .then(res =>{
            console.log(res.data);
            this.setState({
                productos:res.data
            })
        });

    }

    borrarProducto =(codigoProducto) =>{
        axios.delete("http://localhost:8080/api/v1/eliminarProductos/"+codigoProducto)
        .then(res=>{
            this.setState({
                status:"deleted"
            })
        })
        window.location.reload(true);
        Swal(
            "Producto Eliminado",
            "El producto ha sido eliminado",
            "success"
        );
    }
    render(){
        return(
            <div>
                <h1>Productos</h1>
                <div>
                <Link to ="/AgregarProducto"> Crear Producto </Link>
                </div>
                <div >
                <table class="AnchoTabla table table-secondary table-striped">
                    <thead>
                        <tr>
                            <th>Codigo Del Producto</th>
                            <th>Nombre Producto</th>
                            <th>Nit Proveedor</th>
                            <th>Precio De Compra</th>
                            <th>Iva</th>
                            <th>Precio De Venta</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.productos.map((productos)=>{
                               return(
                                   <React.Fragment>
                                       <tr>
                                        <td>{productos.codigoProducto}</td>
                                        <td>{productos.nombre_producto}</td>
                                        <td>{productos.nit_proveedor}</td>
                                        <td>${productos.precio_compra}</td>
                                        <td>{productos.iva_compra}%</td>
                                        <td>${productos.precio_venta}</td>
                                        <td>
                                        <Link class="btnMultiple" to = {"/EditarProducto/"+productos.codigoProducto}>Editar</Link>
                                            <button onClick ={
                                                ()=>{
                                                    this.borrarProducto(productos.codigoProducto)
                                                }
                                            }>Eliminar</button>
                                        </td>
                                       </tr>
                                   </React.Fragment>
                               )
                           }) 
                        }
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

    
export default Productos;