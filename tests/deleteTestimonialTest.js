import {sleep} from 'k6';
import {TEST_CONFIGS} from '../config/constants.js';
import { loginRequest } from '../requests/authRequests.js';
import { PAYLOADS} from '../data/payloads.js';
import { postTestimonialRequest, putTestimonialRequest, deleteTestimonialRequest } from '../requests/testimonialRequests.js';
import { validateLoginResponse } from '../checks/authChecks.js';
import { extractToken } from '../utils/extractToken.js';
import { extractTestimonialId } from '../utils/extractTestimonialId.js';

export default function () {

const loginResponse = loginRequest(PAYLOADS.login);
validateLoginResponse(loginResponse);
const token = extractToken(loginResponse);//extract the token from the login response

const addTestimonialResponse = postTestimonialRequest(
    token, PAYLOADS.addTestimonials
);  //post the testimonial

console.log(addTestimonialResponse.body);

const testimonialId = extractTestimonialId(addTestimonialResponse); //extract the testimonial ID from the add testimonial response
console.log(`Extracted Testimonial ID: ${testimonialId}`);

const updateTestimonialresponse = putTestimonialRequest(
    token, 
    testimonialId, 
    PAYLOADS.updateTestimonials
);  //update the testimonial
console.log(updateTestimonialresponse.body);

const deleteTestimonialResponse = deleteTestimonialRequest(
    token, 
    testimonialId
);

console.log(deleteTestimonialResponse.body);

}

