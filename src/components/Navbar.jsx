import { useState } from "react"
import { Link } from "react-router-dom"

import { motion } from "framer-motion";

import {useAuthContext} from '../hooks/useAuthContext'
import {useLogout} from '../hooks/useLogout'

import { Logo } from "./Logo"

export const Navbar = () => {

  const {user} = useAuthContext()
  const {logout} = useLogout()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="main-nav">
        <Link to="/">
            <Logo />           
        </Link>
        
        {!user && <Link to="/login" className="link-login">Login</Link>}
        {user && (
          <>
            <div onClick={() => setShowMenu(prevShow => !prevShow)} className="link-login"><span style={{marginRight: '10px'}}>{user.displayName}</span><i className="fas fa-chevron-down"></i></div>
            {showMenu && (
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="menu-user">
                <Link to="/create">Subir ilustración</Link>
                <Link to={`/profile/wasdfasfdas`}>Perfil</Link>
                <span onClick={logout}>Logout</span>
              </motion.div>
            )}
          </>
        )}
    
    </div>
  )
}
