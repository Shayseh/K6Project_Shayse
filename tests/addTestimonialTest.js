import { sleep } from 'k6';
import { TEST_CONFIGS } from '../config/constants.js';
import { loginRequest } from '../requests/authRequests.js';
import { postTestimonialRequest } from '../requests/testimonialRequests.js';
import { PAYLOADS } from '../data/payloads.js';
import { validateLoginResponse,validateAddTestimonialResponse } from '../checks/authChecks.js';
import { extractToken } from '../utils/extractToken.js';


export const options = {
    vus: TEST_CONFIGS.vus,
    duration: TEST_CONFIGS.duration
};

export default function () {
    const loginResponse = loginRequest(PAYLOADS.login);
    validateLoginResponse(loginResponse);
    console.log(loginResponse.body);

    const token = extractToken(loginResponse);//extract the token from the login response
   
    const testimonialResponse = postTestimonialRequest(
        token, 
        PAYLOADS.addTestimonials
    );  //post the testimonial

    validateAddTestimonialResponse(testimonialResponse);
    console.log(testimonialResponse.body);

}
