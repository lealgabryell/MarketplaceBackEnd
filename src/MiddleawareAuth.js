const jwtService = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const path = req.path;
  const method = req.method;
  const nonSecurityPath = ["/usuarios/login", "/usuarios"];
  let token = req.headers.authorization;

  if (nonSecurityPath.includes(path)) {
    return next();
  }

  if (!token) {
    res.status(401).json({ message: "Usuário não autorizado!" });
  } else {
    token = token.split(" ")[1];
  }

  try {
    const result = jwtService.verify(token, process.env.SECRET);
    if (result) {
      return next();
    }
    throw new Error("Usuário não autorizado!");
  } catch (err) {
    res.status(401).json({ message: err.message, content: err });
  }
};
