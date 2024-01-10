export const addStoreResponseDTO = (store) => {
    console.log("addStoreResponseDTO clear");
    return {"name": store[0].name, "addr": store[0].addr, "spec_address": store[0].spec_address, "score": store[0].score};
}

export const addMissionResponseDTO = (mission) => {
    console.log("addMissionResponseDTO clear");
    return {"reward": mission[0].reward, "content": mission[0].content, "content": mission[0].content};
}

export const previewReviewResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
           "user_name": data[i].name,
           "rate": data[i].score,
            "review_body": data[i].body,
            "create_at": formatDate(data[i].created_at)
        })
    }
    return {"reviewData": reviews, "cursorId": data[data.length-1].id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}

// 특정 가게의 미션 목록 조회
export const previewMissionResponseDTO = (data) => {

    const missions = [];

    for (let i = 0; i < data.length; i++) {
        missions.push({
           "reward": data[i].reward,
           "deadline": data[i].deadline,
            "mission_spec": data[i].mission_spec,
            "create_at": formatDate(data[i].created_at)
        })
    }
    return {"MissionData": missions, "cursorId": data[data.length-1].id};
}