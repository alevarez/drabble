import { motion } from "framer-motion";

export const Login = () => {


  return (
    <motion.form initial={{opacity: 0}} animate={{opacity: 1}}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
    </motion.form>
  )
}
