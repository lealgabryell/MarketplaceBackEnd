const express = require("express");
const {
  listAll,
  insertOne,
  insertMany,
  listOne,
  deleteById,
  updateById,
} = require("../controllers/usuarioController");
const router = express.Router();

router
  .route("/")
  .get(listAll)
  .post((req, res) => {
    if (Array.isArray(req.body)) {
      insertMany(req, res);
      return;
    }
    insertOne(req, res);
  });

router.route("/:id").get(listOne).put(updateById).delete(deleteById);

module.exports = router;
