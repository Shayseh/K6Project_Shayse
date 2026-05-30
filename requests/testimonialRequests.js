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