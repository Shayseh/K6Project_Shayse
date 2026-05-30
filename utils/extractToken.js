export function extractToken(response) {
    const body = response.json();
    return body.data.token;
}// This function takes a response object, parses its JSON body, and returns the token found in the data property.