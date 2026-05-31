import { sleep} from "k6";
import {TEST_CONFIGS} from "../config/constants.js";
import {PAYLOADS} from "../data/payloads.js";
import { loginRequest } from "../requests/authRequests.js";
import {postTestimonialRequest, putTestimonialRequest} from "../requests/testimonialRequests.js";
import { validateLoginResponse, validateAddTestimonialResponse, validateUpdateTestimonialResponse } from "../checks/authChecks.js";
import { extractToken } from "../utils/extractToken.js";
import { extractTestimonialId } from "../utils/extractTestimonialId.js";

export const options = {
    vus: TEST_CONFIGS.vus,
    duration: TEST_CONFIGS.duration
};

export default function () {

    const loginResponse = loginRequest(PAYLOADS.login);
    validateLoginResponse(loginResponse);
    console.log(loginResponse.body);

    const token = extractToken(loginResponse);//extract the token from the login response

    const addTestimonialResponse = postTestimonialRequest(
        token, PAYLOADS.addTestimonials
    );  //post the testimonial
    
    validateAddTestimonialResponse(addTestimonialResponse);
    console.log(addTestimonialResponse.body);


    const testimonialId = extractTestimonialId(addTestimonialResponse); //extract the testimonial ID from the add testimonial response
    console.log(`Extracted Testimonial ID: ${testimonialId}`);

    const updateTestimonialResponse = putTestimonialRequest(
        token, 
        testimonialId, 
        PAYLOADS.updateTestimonials
    );  //update the testimonial
    validateUpdateTestimonialResponse(updateTestimonialResponse);
    console.log(updateTestimonialResponse.body);

}