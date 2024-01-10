// routes/store.route.js

import express from "express";
import asyncHandler from 'express-async-handler';

import { storeAdd, missionAdd, reviewPreview, missionPreview } from "../controllers/store.controller.js";

export const storeRouter = express.Router({mergeParams: true});

storeRouter.post('/add', asyncHandler(storeAdd));
storeRouter.post('/mission', asyncHandler(missionAdd));

storeRouter.get('/reviews', asyncHandler(reviewPreview));

// 특정 가게의 미션 목록 조회
storeRouter.get('/missions/:storeId', asyncHandler(missionPreview));