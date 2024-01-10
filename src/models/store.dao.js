// models/store.dao.js

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getStoreID, insertStoreSql, getMissionID, insertMissionSql, getReviewByReviewId, getReviewByReviewIdAtFirst, getMissionByMissionIdAtFirst, getMissionByMissionId } from "./store.sql.js";

// Store 데이터 삽입
export const addStore = async (data) => {
    try{
        const conn = await pool.getConnection();
        const result = await pool.query(insertStoreSql, [data.name, data.addr, data.spec_addr, data.score]);

        conn.release();
        return result[0].insertId;
        
   }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
   }
}

// 가게 정보 얻기
export const getStore = async (storeId) => {
    try {
        const conn = await pool.getConnection();
        const [store] = await pool.query(getStoreID, storeId);

        if(store.length == 0){
            return -1;
        }

        conn.release();
        return store;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// Mission 데이터 삽입
export const addMission = async (data) => {
    try{
        const conn = await pool.getConnection();
        const result = await pool.query(insertMissionSql, [data.store_id, data.reward, data.deadline, data.content]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 미션 정보 얻기
export const getMission = async (missionId) => {
    try {
        const conn = await pool.getConnection();
        const [mission] = await pool.query(getMissionID, missionId);

        if(mission.length == 0){
            return -1;
        }

        conn.release();
        return mission;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 가게 리뷰 목록 조회
export const getPreviewReview = async (cursorId, size, userId) => {
    try {
        const conn = await pool.getConnection();
        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getReviewByReviewIdAtFirst, [parseInt(userId), parseInt(size)]);
            conn.release();
            return reviews;
        } else{
            const [reviews] = await pool.query(getReviewByReviewId, [parseInt(userId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;
        }
    
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 특정 가게의 미션 목록 조회
export const getPreviewMission = async (cursorId, size, storeId) => {
    //try {
        const conn = await pool.getConnection();
        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [missions] = await pool.query(getMissionByMissionIdAtFirst, [parseInt(storeId), parseInt(size)]);
            conn.release();
            return reviews;
        }else{
            const [missions] = await pool.query(getMissionByMissionId, [parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return missions;
        }
    //} catch (err) {
    //    throw new BaseError(status.PARAMETER_IS_WRONG);
   // }
}