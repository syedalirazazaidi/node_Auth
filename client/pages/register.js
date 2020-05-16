import Layout from "../components/Layout";
import { useState } from "react";
import axios from 'axios'
const Register = () => {
  const [state, setState] = useState({
    name: "",
    emai: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register",
  });
  const {name,email,password,error,success,buttonText} = state
  const handleSubmit=(e)=>{
      e.preventDefault()
      // console.log('5555',{email,password,name})
   axios.post("http://localhost:8000/api/register",{
     name,email,password
   }).then(res=>{
     console.log("",res)
   }).catch(err=> console.log("err44444",err))
    
   
  }
  const handelChange=(name)=>(e)=>{
      setState({
          ...state,[name]:e.target.value,error:"",success:'',buttonText:'Register'
      })
  }
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
        value={name}
          onChange={handelChange("name")}
          type="text"
          className="form-control"
          placeholder="Type Your name"
        ></input>
      </div>
      <div className="form-group">
        <input
         value={email}
          onChange={handelChange("email")}
          type="email"
          className="form-control"
          placeholder="Type Your email"
        ></input>
      </div>
      <div className="form-group">
        <input
         value={password}
          onChange={handelChange("password")}
          type="password"
          className="form-control"
          placeholder="Type Your password"
        ></input>
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  );
  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h1>Register</h1>
        <br />
        {registerForm()}
        <hr/>
        {JSON.stringify(state)}
      </div>
    </Layout>
  );
};


export default Register;
