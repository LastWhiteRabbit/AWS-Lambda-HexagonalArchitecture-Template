const get = require("./adapters/getUsersRequest.js")

exports.lambdaHandler = async (event) => {
    
  const id = event.pathParameters.id;
  const response = await get.getUsersRequest(id);

  if (response == null){
     return {message: "not found"}
    }

  return response

}