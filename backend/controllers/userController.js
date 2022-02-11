const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const User = require("../models/userModel");

/**
 * @desc Register User
 * @route POST /api/users
 * @access PUBLIC
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add All fields");
  }

  //check if user with email already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error(`User with ${email} already Exists`);
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (!user) {
    res.status(500);
    throw new Error("User creation Failed, try again");
  }

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
});

/**
 * @desc Authenticate User
 * @route POST /api/users/login
 * @access PUBLIC
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check  if user exists
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

/**
 * @desc Get User Data
 * @route POST /api/users/me
 * @access PUBLIC
 */
const getUser = asyncHandler(async (req, res) => {
  res.json({ message: "User data" });
});

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
