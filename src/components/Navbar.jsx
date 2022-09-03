import { useState } from "react"
import { Link } from "react-router-dom"

import { motion } from "framer-motion";

import { Logo } from "./Logo"

export const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="main-nav">
        <Link to="/">
            <Logo />           
        </Link>
        
        {/* <Link to="/login" className="link-login">Login</Link> */}
        <div onClick={() => setShowMenu(prevShow => !prevShow)} className="link-login"><span style={{marginRight: '10px'}}>matildeV</span><i className="fas fa-chevron-down"></i></div>
        {showMenu && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="menu-user">
            <Link to="/create">Subir ilustración</Link>
            <Link to={`/profile/wasdfasfdas`}>Perfil</Link>
            <span>Logout</span>
          </motion.div>
        )}
    
    </div>
  )
}
