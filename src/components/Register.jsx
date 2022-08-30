import { motion } from "framer-motion";


export const Register = () => {
  return (
    <motion.form initial={{opacity: 0}} animate={{opacity: 1}}>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirmar password" />
        <button type="submit">Registrarme</button>
    </motion.form>
  )
}
