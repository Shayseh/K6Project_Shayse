import {TEST_CONFIGS} from '../config/constants.js';
import {PAYLOADS} from '../data/payloads.js';

export const options = {
    vus: TEST_CONFIGS.vus,
    duration: TEST_CONFIGS.duration
}


export default function loginTest(){
    const response = loginRequest(PAYLOADS.login);

    validateLoginResponse(response);
    sleep(TEST_CONFIGS.sleepTime);
}