import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinUser, reviewUser, missionUser } from "../services/user.service.js";

export const userSignin = async (req, res, next) => {
    console.log("회원가입을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}

export const userReview = async (req, res, next) => {
    const review = req.body;
    console.log("리뷰를 작성합니다.");
    console.log("body:", review); // 값이 잘 들어오는지 테스트

    res.send(response(status.SUCCESS, await reviewUser(req.body)));
}

export const userMission = async (req, res, next) => {
    const mission = req.body;
    console.log("도전 중인 미션에 추가합니다.");
    console.log("body:", mission); // 값이 잘 들어오는지 테스트

    res.send(response(status.SUCCESS, await missionUser(req.body)));
}