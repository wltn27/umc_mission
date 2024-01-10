// dtos/user.response.dto.js

// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

export const reviewResponseDTO = (review) => {
    console.log("reviewResponseDTO clear");
    return {"score": review[0].score, "body": review[0].body};
}

export const missionResponseDTO = (mission) => {
    console.log("missionResponseDTO clear");
    return;
}