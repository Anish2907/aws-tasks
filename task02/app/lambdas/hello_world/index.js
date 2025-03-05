exports.handler = async (event) => {
    // TODO implement
    const path = event.path;
    const method = event.method;
    let response;
    if(path === "/hello" && method === "GET"){
        response = {
            "statusCode": 200,
            "message": "Hello from Lambda",
        }
    }else{
        response = {
            "statusCode": 400,
            "message": `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
        }
    }
    return response;
};
