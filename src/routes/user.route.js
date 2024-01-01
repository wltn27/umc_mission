// routes/user.route.js
import express from "express";
import asyncHandler from 'express-async-handler';

import { userSignin, userReview, userMission } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/review', asyncHandler(userReview));
userRouter.post('/mission', asyncHandler(userMission));