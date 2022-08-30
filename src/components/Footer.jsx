import { Link } from "react-router-dom"
import { Logo } from "./Logo"

export const Footer = () => {
  return (
    <footer className="footer-main">
        <div className="content-footer">
            <p>Ⓒ drabble inc. All right reserved.</p>
            <Link to="/">
                <Logo />           
            </Link>
        </div>
    </footer>
  )
}
