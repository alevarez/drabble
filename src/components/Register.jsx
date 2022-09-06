import { motion } from "framer-motion";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";


export const Register = () => {

  const {signup, error} = useSignup()

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    if (displayName === '' || email === '' || password === '' || confirmPassword === '') {
      return
    }

    if (password !== confirmPassword) {
      return
    }

    signup(email, password, displayName)
  }

  return (
    <motion.form onSubmit={handleSubmit} initial={{opacity: 0}} animate={{opacity: 1}}>
        <input type="text" placeholder="Username" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirmar password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Registrarme</button>
    </motion.form>
  )
}
