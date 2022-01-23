const express = require("express");

const User = require("../models/user.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.get("", (req, res) => {
  return res.render('users/index');
});

router.get('/signup', (req, res) => {
  return res.render('users/signup');
});

router.get("/new", (req, res) => {
  return res.render("users/new");
});

router.get("/:id/edit", async (req, res) => {
  // /users/:id/edit => edit form
  try {
    const user = await User.findById(req.params.id).lean().exec();

    return res.render("users/edit", { user: user });
  } catch (err) {}
});

router.get("/:id/delete", async (req, res) => {
  // /users/:id/edit => edit form
  try {
    await User.findByIdAndDelete(req.params.id).lean().exec();
    const users = await User.find().lean().exec();
    // 6 users => deleted 1 => when we get all users we get 5 => redirect to index with 5 users
    return res.render("index", { users: users });
  } catch (err) {}
});

// /users
router.post("", crudController(User).post);
router.get("", crudController(User, "users/index").get);
router.get("/:id", crudController(User).getOne);
router.patch("/:id", crudController(User, "users/index").updateOne);
router.delete("/:id", crudController(User).deleteOne);

module.exports = router;
