import React, { useContext, useState } from "react";
import { AuthCard } from "../components/authCard/AuthCard";
import logo from '../../../aseets/imag/form.png';
import accountIcon from '../../../aseets/icons/icon.png';
import passwordIcon from '../../../aseets/icons/contraseña.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/contexts/AuthContext';
import { AuthService } from "../../../services/auth/AuthService";



export function Login() {
    const { dispatchUser }:any = useContext(AuthContext);
    const [auth, setAuth] = useState ({email:'', password:''})
    const navigate = useNavigate();

    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
      try {
        e.preventDefault(); //Se evita la recarga de la pagina.
        const resp = await AuthService.login(auth);
        console.log(resp)
        if(resp.success){
          sessionStorage.setItem('user', JSON.stringify({...resp.data, loggedIn:true}));
          dispatchUser({type:'login', payload:resp.data});
          navigate('/dashboard/home');
        }
      }catch(error){

        }
    }
    const handleChange = async (e:React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
      setAuth({
        ...auth,
        [e.target.name]:e.target.value
      })
    }

  return (
    <AuthCard>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="text-center mb-2">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>

        <div className="mb-2 p-1 d-flex border rounded">
          <div className="mx-2 mt-1">
            <img className="img-fluid" src={accountIcon} alt="iconUser" />
          </div>
          <input
            autoFocus
            className="form-control txt-input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mb-2 p-1 d-flex border rounded">
          <div className="mx-2 mt-1">
            <img className="img-fluid" src={passwordIcon} alt="iconUser" />
          </div>
          <input
            className="form-control txt-input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="row d-flex justify-content-between mt-3 mb-2">
          <div className="mb-3">
            <div className="form-check ms-1">
              <input
                type="checkbox"
                className="form-check-input"
                id="mycheckbox"
              />
              <label className="form-check-label" htmlFor="mycheckbox">
                Remember
              </label>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>

        <div className="mt-3 mb-3 text-center">
          <Link to="/auth/recover">Forgot Password?</Link>
        </div>

        <div className="mt-3 mb-3 text-center">
          <h6>Don´t have an account</h6>
          <Link to="/auth/register">Register</Link>
        </div>
      </form>
    </AuthCard>
  );
}