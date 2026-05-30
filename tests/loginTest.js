import http from 'k6/http';
import {TEST_CONFIGS} from '../config/constants.js';
import {PAYLOADS} from '../data/payloads.js';
import { loginRequest } from '../requests/authRequests.js';
import { sleep } from 'k6';
import { validateLoginResponse } from '../checks/authChecks.js';

export const options = {
    vus: TEST_CONFIGS.vus,
    duration: TEST_CONFIGS.duration
}


export default function loginTest(){
    const response = loginRequest(PAYLOADS.login);
    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);

    validateLoginResponse(response);
    //sleep(TEST_CONFIGS.sleepTime);
}

