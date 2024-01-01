// models/store.dao.js

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getStoreID, insertStoreSql, getMissionID, insertMissionSql } from "./store.sql.js";

// Store 데이터 삽입
export const addStore = async (data) => {
    try{
        const conn = await pool.getConnection();
        const result = await pool.query(insertStoreSql, [data.name, data.addr, data.spec_addr]);

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