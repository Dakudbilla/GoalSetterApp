const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const User = require("../models/userModel");
const generateJWTtoken = require("../config/generateJWTtoken");
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
    token: generateJWTtoken(user._id),
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
      token: generateJWTtoken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

/**
 * @desc Get User Data
 * @route POST /api/users/me
 * @access PRIVATE
 */
const getUser = asyncHandler(async (req, res) => {
  //since the user details have been attached to the reqest
  //we can return it
  const { _id, email, name } = req.user;
  res.status(200).json({ id: _id, email, name });
});

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
