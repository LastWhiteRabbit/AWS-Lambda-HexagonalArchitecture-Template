const getUser = require("./adapters/getUsersRequest.js")
const getAllUsers = require("./adapters/getAllUsersRequest.js")
const deleteUser = require("./adapters/deleteUserRequest.js")
const inputUser = require("./adapters/inputUserRequest.js")
const { json } = require("express/lib/response")


exports.lambdaHandler = async (event) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };
    /*
  const id = event.pathParameters.id;
  const response = await get.getUsersRequest(id);

  if (response == null){
     return {message: "not found"}
    }

  return response */


  try {
    switch (event.routeKey) {
      case "GET /users/{id}":
        const getid = event.pathParameters.id;
        body = await getUser.getUsersRequest(getid);
        break;

      case "GET /users":
        body = await getAllUsers.getAllUsersRequest();
        break;
      case "DELETE /users/{id}":
        const deleteId = event.pathParameters.id;
        await deleteUser.deleteUserRequest(deleteId);
        body = `Deleted item ${event.pathParameters.id}`;
        break;

        case "PUT /users":
          let requestJSON = JSON.parse(event.body);
          await inputUser.inputUserRequest(requestJSON);
          body = `Put item ${requestJSON.userId}`;
          break;

      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } 
  catch (error) {
    statusCode = 400;
    body = error.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };

}

