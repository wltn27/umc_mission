// routes/store.route.js

import express from "express";
import asyncHandler from 'express-async-handler';

import { storeAdd } from "../controllers/store.controller.js";

export const userRouter = express.Router();

storeRouter.post('/add', asyncHandler(storeAdd));
storeRouter.post('/mission', asyncHandler(missionAdd));