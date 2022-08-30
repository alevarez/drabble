import { Footer } from "../Footer"
import { Navbar } from "../Navbar"

export const MainLayout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
