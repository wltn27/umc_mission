// models/store.sql.js

export const insertStoreSql = "INSERT INTO store (name, address, spec_address, score) VALUES (?, ?, ?, ?);";

export const getStoreID = "SELECT * FROM store WHERE id = ?";

// mission
export const insertMissionSql = "INSERT INTO mission (store_id, reward, deadline, content) VALUES (?, ?, ?, ?);";
export const getMissionID = "SELECT * FROM mission WHERE id = ?";

// 리뷰 목록 조회
export const getReviewByReviewId =
"SELECT u.name, r.id, r.score, r.body, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.id "
+ "WHERE r.store_id = 1 AND r.id < 5 "
+ "ORDER BY r.id DESC LIMIT 3 ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.name, r.id, r.score, r.body, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.id "
+ "WHERE r.store_id = ? "
+ "ORDER BY r.id DESC LIMIT ? ;"

// 특정 가게의 미션 목록 조회
export const getMissionByMissionId = 
"SELECT st.name, m.id, m.reward, m.deadline, m.mission_spec, m.created_at "
+ "FROM mission m JOIN store st on m.store_id = st.id "
+ "WHERE m.store_id = ? AND m.id < ? "
+ "ORDER BY m.id DESC LIMIT ? ;"

export const getMissionByMissionIdAtFirst = 
"SELECT st.name, m.id, m.reward, m.deadline, m.mission_spec, m.created_at "
+ "FROM mission m JOIN store st on m.store_id = st.id "
+ "WHERE m.store_id = ? "
+ "ORDER BY m.id DESC LIMIT ? ;"