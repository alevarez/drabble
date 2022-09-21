import { useState } from "react";
import { motion } from "framer-motion";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {

  const {error, login} = useLogin()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '')
      return

    login(email, password)
  }

  return (
    <motion.form onSubmit={handleSubmit} initial={{opacity: 0}} animate={{opacity: 1}}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
    </motion.form>
  )
}
