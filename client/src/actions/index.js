import types from './types'
import axios from 'axios';

export async function getItemData(){
    const resp = await axios.get(`/api/iteminfo/`)
    return{
        type: types.GET_ITEM_DATA,
        payload: resp
    }
    
}

export async function createItemData(name, date, description, price, location, image, item, contact){
    const resp = await axios.post(`/api/createItem/name/${name}/date/${date}/description/${description}/price/${price}/location/${location}/image/${image}/item/${item}/contact/${contact}/`);
    return{
        type: types.CREATE_ITEM_DATA,
        payload: resp
    }
    
}

// export async function createItem(item){
//     const resp = await axios.post('/api/createItem', {

//     });
    
//     return{
//         type: types.CREATE_ITEM_DATA,
//         payload: resp
//     }
// }


// export async function createImage(){
//     const resp = await axios.post(`/api/image/`)
//     return{
//         type: types.CREATE_IMAGE,
//         payload: resp
//     }
    
// }
