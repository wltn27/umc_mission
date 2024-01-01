// routes/store.route.js

import express from "express";
import asyncHandler from 'express-async-handler';

import { storeAdd, missionAdd } from "../controllers/store.controller.js";

export const storeRouter = express.Router();

storeRouter.post('/add', asyncHandler(storeAdd));
storeRouter.post('/mission', asyncHandler(missionAdd));