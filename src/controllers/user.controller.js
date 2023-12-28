import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinUser, reviewUser } from "../services/user.service.js";

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