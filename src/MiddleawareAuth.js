// const jwtService = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const path = req.path;
//   const mathod = req.method
//   const nonSecurityPath = [
//     "/usuarios/login"
//   ];

//   if (nonSecurityPath.includes(path) || path === '/usuarios' && method ==== 'POST') {
//     return next();
//   }

//   let token = req.headers.authorization;
//   if (!token) {
//     res.status(401).json({ message: "Usuário não autorizado!" });
//   }

//   token = token.split(" ")[1];

//   try {
//     const result = jwtService.verify(token, process.env.SECRET);
//     if (result) {
//       return next();
//     }
//     throw new Error("Usuário não autorizado!");
//   } catch (err) {
//     res.status(401).json({ message: err.message, content: err });
//   }
// };
