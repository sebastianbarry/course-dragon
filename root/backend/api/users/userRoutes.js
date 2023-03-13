import express from "express";

import validateLoginInput from "./validation/login.js"
import validateRegisterInput from "./validation/register.js";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/register", validateRegisterInput);

export default router;