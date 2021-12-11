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
            <div class="principal">
                <div class="encabezado">
                    <h1>Modulo de Productos</h1>
                </div>

                <div class="encabezado">
                    <Link class="btngeneral" to ="/AgregarProducto"> 
                        Crear Producto 
                    </Link>
                </div>
                
                <table class="tablag">
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
                                        <td><center>{productos.codigoProducto}</center></td>
                                        <td><center>{productos.nombre_producto}</center></td>
                                        <td><center>{productos.nit_proveedor}</center></td>
                                        <td><center>${productos.precio_compra}</center></td>
                                        <td><center>{productos.iva_compra}%</center></td>
                                        <td><center>${productos.precio_venta}</center></td>
                                        <td>
                                            <center>
                                                <Link
                                                    class="btnMultiple1"
                                                    to={"/EditarProducto/" + productos.codigoProducto}
                                                >
                                                    Editar
                                                </Link>
                                                <button
                                                    class="btnMultiple2"
                                                    onClick={() => {
                                                        this.borrarProducto(productos.codigoProducto);
                                                    }}
                                                >
                                                    Eliminar
                                                </button>
                                            </center>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

    
export default Productos;