import { previewReviewResponseDTO, previewMissionResponseDTO } from "../dtos/store.response.dto.js";
import { getPreviewReview, getPreviewMission } from "../models/store.dao.js";

export const getReview = async (userId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, userId));
}

// 특정 가게의 미션 목록 조회
export const getMission = async (storeId, query) => {
    const {missionId, size = 3} = query;
    return previewMissionResponseDTO(await getPreviewMission(missionId, size, storeId));
}