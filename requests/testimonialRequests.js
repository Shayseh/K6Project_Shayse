import http from "k6/http";
import {URLS} from '../config/urls.js';

export function postTestimonialRequest(token, payload){
    return http.post(URLS.testimonials, JSON.stringify(payload), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}   

    export function putTestimonialRequest(token, testimonialId, payload){
        const url = URLS.updateTestimonial(testimonialId);
        return http.put(url, JSON.stringify(payload), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
}

export function deleteTestimonialRequest(token, testimonialId){
    const url = URLS.deleteTestimonial(testimonialId);
    return http.del(url, null, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}
