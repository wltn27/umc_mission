// routes/user.route.js
import express from "express";
import asyncHandler from 'express-async-handler';

import { userSignin, userReview } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/review', asyncHandler(userReview));