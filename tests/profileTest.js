import { sleep } from 'k6';
import {TEST_CONFIGS} from '../config/constants.js';
import { loginRequest } from '../requests/authRequests.js';
import {getProfileRequest, getToken} from '../requests/profileRequests.js';
import {PAYLOADS} from '../data/payloads.js';
import { validateLoginResponse } from '../checks/authChecks.js';

export const options = {
    vus: TEST_CONFIGS.vus,
    duration: TEST_CONFIGS.duration
}


export default function(){
    const loginRequestPayload = loginRequest(PAYLOADS.login);
    validateLoginResponse(loginRequestPayload);

    const body = loginRequestPayload.json();
    const token = body.data.token;


    const response = getProfileRequest(token);
    console.log(`Response status: ${response.status}`); 
    console.log(`Response body: ${response.body}`);
    
}