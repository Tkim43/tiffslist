import types from './types'
import axios from 'axios';

export async function getItemData(){
    const resp = await axios.get(`/api/iteminfo/`)
    return{
        type: types.GET_ITEM_DATA,
        payload: resp
    }
    
}

export async function createItemData(name, date, description, image, price, location, item, contact){
    const resp = await axios.post(`/api/createItem/name/${name}/date/${date}/description/${description}/image/${image}/price/${price}/location/${location}/item/${item}/contact/${contact}/`);
    return{
        type: types.CREATE_ITEM_DATA,
        payload: resp
    }
    
}

export async function createItem(item){
    const resp = await axios.post('/api/createItem', {

    });
    
    return{
        type: types.CREATE_ITEM_DATA,
        payload: resp
    }
}


// export async function createItemData(){
//     const resp = await axios.get(`/api/createItem/`)
//     return{
//         type: types.CREATE_ITEM_DATA,
//         payload: resp
//     }
    
// }