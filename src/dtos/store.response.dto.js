export const addStoreResponseDTO = (store) => {
    console.log("addStoreResponseDTO clear");
    return {"name": store[0].name, "addr": store[0].addr, "spec_address": store[0].spec_address};
}