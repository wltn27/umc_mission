import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { signinResponseDTO, reviewResponseDTO } from "../dtos/user.response.dto.js";
import { addUser, getUser, getUserPreferToUserID, setPrefer, addReview, getReview } from "../models/user.dao.js";

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinUserData = await addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){
        // joinUserData가 -1일 때, if문에 걸려 Error를 뱉게 된다!
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}

export const reviewUser = async(body) => {
    const joinReviewData = await addReview ({
        'user_id' : body.user_id,
        'store_id' : body.store_id,
        'score' : body.score,
        'content' : body.content,
        'image_url' : body.image_url
    });
    console.log(joinReviewData);
    if(joinReviewData == -1){
        throw new BaseError(status.STORE_NOT_EXIST);
    }else{
        return reviewResponseDTO(await getReview(joinReviewData));
    }
}