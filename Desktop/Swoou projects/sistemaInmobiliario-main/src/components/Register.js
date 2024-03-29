import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {signup} from "../firebase"
import {Alert} from "./alert"
export function Register() {


  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user.email, user.password, navigate)
  };

  return (
    <div className="bg-secondary vh-100 d-flex flex-column justify-content-center align-items-center">
           <div className="w-full max-w-3xl m-auto">
        <h1 className="text-center font-bold my-4 text-md flex justify-between px-3">Register</h1>
      </div> 
      
      
      {error && <Alert message={error} />}



      <form onSubmit={handleSubmit} className="col-5 p-5  mb-5 rounded-1 bg-light">
        <fieldset disabled="">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email"
              name="email"
              id="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              class="form-control"
              placeholder="tucorreo@company.com" />
          </div> <br />
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password"
              name="password"
              id="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              class="form-control"
              placeholder="Ingrese su contraseña" />
          </div> <br />
          <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary w-50 mr-5">Sign In</button>
          </div> <br />
          <p className="text-center">
        Already have an Account?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
        </fieldset>
      </form>
      
    </div>
  );
}
export default Register;