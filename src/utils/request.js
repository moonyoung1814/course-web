import fetch from "./manager"
import path from "./api/ciAPI"
import {GET,POST,POT,DELETE} from "./requestMethods"

export function getListAPI(params){
    return fetch({
        url:path.data,
        method:GET,
        params:params
    })
}
export function postListAPI(params){
    return fetch({
        url:path.data,
        method:POST,
        params:params
    })
}
export function potListAPI(params){
    return fetch({
        url:path.data,
        method:POT,
        params:params
    })
}
export function deleteListAPI(params){
    return fetch({
        url:path.data,
        method:DELETE,
        params:params
    })
}
