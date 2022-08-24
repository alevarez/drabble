import { Link } from "react-router-dom"
import { Logo } from "./Logo"
import { SearchIcon } from "./SearchIcon"

export const Navbar = () => {
  return (
    <div className="main-nav">
        <Link to="/">
            <Logo />           
        </Link>
        <div className="content-search">
            <form className="search search-almost">
                <input type="text" placeholder="Search..." />
                <span><SearchIcon /></span>
            </form>
            
        </div>
        <Link to="login" className="link-login">Login</Link>
    </div>
  )
}
