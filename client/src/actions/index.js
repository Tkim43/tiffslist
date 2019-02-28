import types from './types'
import axios from 'axios';

export async function getItemData(){
    const resp = await axios.get(`/api/iteminfo/`)
    return{
        type: types.GET_ITEM_DATA,
        payload: resp
    }
    
}

export async function createItemData(name, date, description, price, location, item, contact){
    const resp = await axios.post(`/api/createItem/name/${name}/date/${date}/description/${description}/price/${price}/location/${location}/item/${item}/contact/${contact}/`);
    return{
        type: types.CREATE_ITEM_DATA,
        payload: resp
    }
    
}

export async function storeImage(image, itemID){
    const resp = await axios.post(`/api/images/itemID/${itemID}`, {image})
    return{
        type: types.STORE_IMAGE,
        payload: resp
    }

}

// export async function getImage(ID){
//     const resp = await axios.post(`/api/imageurl/ID/${ID}/`)
//     return{
//         type: types.GET_IMAGE,
//         payload: resp
//     }
    
// }

// export async function getImage(){
//     const resp = await axios.get(`/api/imageurl/`)
//     return{
//         type: types.GET_IMAGE,
//         payload: resp
//     }
    
// }

export async function getAllData(){
    const resp = await axios.get(`/api/totalitems/`)
    return{
        type: types.GET_ALL_DATA,
        payload: resp
    }
    
}

export async function getSingleItem(itemID){
    const resp = await axios.get(`/api/singleItem/itemID/${itemID}/`)
    return{
        type: types.GET_SINGLE_ITEM,
        payload: resp
    }
}