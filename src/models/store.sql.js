// models/store.sql.js

export const insertStoreSql = "INSERT INTO store (name, address, spec_address) VALUES (?, ?, ?);";

export const getStoreID = "SELECT * FROM store WHERE id = ?";