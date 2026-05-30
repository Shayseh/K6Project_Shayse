import http from 'k6/http';
import {URLS} from '../config/urls.js';
import {HEADERS} from '../config/constants.js';

export function getProfileRequest(token){
    const headers = token ? {...HEADERS.JSONjson, 'Authorization': `Bearer ${token}`} : HEADERS.JSONjson; //
    return http.get(URLS.profile, {headers});
}