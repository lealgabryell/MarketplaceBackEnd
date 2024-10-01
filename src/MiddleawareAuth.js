const jwtService = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const path = req.path;
  const method = req.method;
  const nonSecurityPath = ["/usuarios/login"];
  let token = req.headers.authorization;

  if (
    nonSecurityPath.includes(path) ||
    (path === "/usuarios" && method === "POST")
  ) {
    return next();
  }

  if (!token) {
    res.status(401).json({ message: "MiddlewareAuth linha 17" });
  } else {
    token = token.split(" ")[1];
  }

  try {
    const result = jwtService.verify(token, process.env.SECRET);

    if (result) {
      return next();
    }
    throw new Error("MiddlewareAuth linha 29");
  } catch (err) {
    res.status(401).json({ message: err.message, content: err });
  }
};
