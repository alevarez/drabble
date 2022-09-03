import { useState } from "react"

import { MainLayout } from "../components/layouts/MainLayout"

import { Login } from "../components/Login"
import { Register } from "../components/Register"

import {Logo} from '../components/Logo'

export const Signup = () => {

  const [showRegister, setShowRegister] = useState(false)

  return (
    <MainLayout>
      <div className="content-login">
        <div className="left-login">
        <div className="logo">
          <Logo />
        </div>
          <h3>Únete y comparte tus ilustraciones</h3>
          {/* <div className="cambio-form">
            <h2 onClick={() => setShowRegister(false)} className={showRegister ? "" : "selected"}>Login</h2>
            <h2 onClick={() => setShowRegister(true)} className={showRegister ? "selected" : ""}>Registro</h2>
          </div> */}
          {showRegister ? <Register /> : <Login />}
          <div className="cambio-form">
            {showRegister 
              ? <p>¿Ya tienes cuenta? <span onClick={() => setShowRegister(false)}>Ingresar</span></p>
              : <p>¿No tienes cuenta? <span onClick={() => setShowRegister(true)}>Registro</span></p>
            }
            
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
