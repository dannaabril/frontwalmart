import React, { Component } from "react";
import axios from "axios";
import Router from './Router';



class Login extends Component{
    path = null
    url = [];
    proveedorId= null
    nombres=React.createRef();
    clave=React.createRef();


    state ={
        datoslogin:[],
        status: null
    }

    

    enviologin = (e) => {
        e.preventDefault();
            var ingreso = {
                nombres:this.nombres.current.value,
                clave:this.clave.current.value,
            }


    
        axios.post("http://localhost:8080/api/v1/login",ingreso)
            .then(res =>{
                this.setState({
                    datoslogin:res.data,
                    status:"success"
                })
                console.log(res.data)
                })
    
    }

    render(){
        if(this.state.status === "success"){
            return < Router />
        }
     
    return(


        <div className="loginfor">
            
            <div className="formu">
            
                <h4>Login</h4>
                        

                        <form onSubmit= {this.enviologin}> 
                            <div>
                                <label>Nombre</label>
                                <input  required="required" class="login-username" type = "text" name = "nombres" ref={this.nombres}/>
                            </div>
                            <div>
                                <label>Contraseña</label>
                                <input type = "password" class="login-password" name = "clave" ref={this.clave} />
                            </div>
                            
                            <div>
                                <input  type = "submit" />
                                <a href="/Login"> Cancelar </a>
                            </div>
                        </form>
            </div>

            <div className="login"></div>
                    

        </div>
            );
        }
    
    


}



export default Login;