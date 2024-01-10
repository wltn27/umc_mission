import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinStore, joinMission } from "../services/store.service.js";
import { getReview, getMission } from "../providers/store.provider.js";

export const storeAdd = async (req, res, next) => {
    const store_add = req.body;
    console.log("가게 추가를 요청하였습니다!");
    console.log("body:", store_add); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinStore(store_add)));
}

export const missionAdd = async (req, res, next) => {
    const mission_add = req.body;
    console.log("미션 추가를 요청하였습니다!");
    console.log("body:", mission_add); // 값이 잘 들어오는지 테스트

    res.send(response(status.SUCCESS, await joinMission(mission_add)));
}

export const reviewPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getReview(req.params.userId, req.query)));
}

// 특정 가게의 미션 목록 조회
export const missionPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getMission(req.params.storeId, req.query)));
}