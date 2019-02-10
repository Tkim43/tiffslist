import types from './types'
import axios from 'axios';

export async function getItemData(){
    const resp = await axios.get(`/api/iteminfo/`)
    return{
        type: types.GET_ITEM_DATA,
        payload: resp
    }
    
}

export async function createItemData(){
    const resp = await axios.get(`/api/createItem/`)
    return{
        type: types.CREATE_ITEM_DATA,
        payload: resp
    }
    
}