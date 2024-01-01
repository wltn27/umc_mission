import { addStoreResponseDTO } from "../dtos/store.response.dto.js";
import { addStore, getStore } from "../models/store.dao.js";

export const joinStore = async (body) => {
    const joinStoreData = await addStore({
        'name': body.name,
        'addr': body.addr,
        'spec_addr': body.spec_addr,
    });
   
    return addStoreResponseDTO(await getStore(joinStoreData));
}