import http from ''

export function loginRequest(payload){
    const url = URLS.login;
    const body = JSON.stringify(payload);

    return http.post(url,body);
}