const userRouter = require("express").Router();
const { register, login, logout } = require("../Controllers/User-Controller");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);

module.exports = userRouter;
