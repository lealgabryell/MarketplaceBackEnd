const jwtService = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const path = req.path
  const nonSecurityPath = [
    '/usuarios/login',
    '/about',
    '/usuarios'
  ]

  if (nonSecurityPath.includes(path)) {
    return next()
  }

  let token = req.headers.authorization
  if (!token) {
    res.status(401).json({ message: "Usuário não autorizado!" })
  }

  token = token.split(' ')[1]

  try {
    const result = jwtService.verify(token, process.env.SECRET)
    if (result) {
      return next()
    }
    throw new Error('Usuário não autorizado!')
  } catch (err) {
    res.status(401).json({ message: err.message, content: err })
  }
}