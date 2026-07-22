import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router = Router()

router.post('/login', async (req, res) => {
  const { password } = req.body

  if (!password) {
    return res.status(400).json({ message: 'Password is required.' })
  }

  const hash = process.env.ADMIN_PASSWORD_HASH
  const matches = hash ? await bcrypt.compare(password, hash) : false

  if (!matches) {
    return res.status(401).json({ message: 'Incorrect password.' })
  }

  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '7d' })
  res.json({ token })
})

export default router
