exports.handler = async (event) => {
    // TODO implement
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
    // return response;

    return{
        statusCode: 200,
        headers: {
        'Content-Type': 'application/json'
        },
        body: {
            statusCode: 200,
            message: 'Hello from Lambda'
        }
    }
};
