export function extractTestimonialId(response) {
    const body = response.json();
    return body.data.Id;
}