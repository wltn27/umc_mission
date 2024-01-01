import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinStore, joinMission } from "../services/store.service.js";

export const storeAdd = async (req, res, next) => {
    const store_add = req.body;
    console.log("가게 추가를 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinStore(req.body)));
}

export const missionAdd = async (req, res, next) => {
    const mission_add = req.body;
    console.log("미션 추가를 요청하였습니다!");
    console.log("body:", mission_add); // 값이 잘 들어오는지 테스트

    res.send(response(status.SUCCESS, await joinMission(mission_add)));
}