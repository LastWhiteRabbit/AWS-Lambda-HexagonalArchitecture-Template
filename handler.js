const getProduct = require("./adapters/getProductsRequest.js")
const getAllProducts = require("./adapters/getAllProductsRequest.js")
const deleteProduct = require("./adapters/deleteProductRequest.js")
const inputProduct = require("./adapters/inputProductRequest.js")
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
      case "GET /products/{id}":

        const getid = event.pathParameters.id;


        if(event.queryStringParameters !== null && event.queryStringParameters !== undefined){

          if(currencyValidate(event.queryStringParameters?.currency)){
            console.log(`currency works ${event.queryStringParameters?.currency}`);
            
            body = await getProduct.getProductsRequest(getid,event.queryStringParameters?.currency );

          }
          else{
            return {
              'statusCode' : 400,
              'body': JSON.stringify({message: 'Invalid currency!'})
              }
          }

        }

        body = await getProduct.getProductsRequest(getid,event.queryStringParameters?.currency);
        console.log("handler.js body -->");
        console.log(body);


        if(JSON.stringify(body) === '{}')
          statusCode = 204;
        break;


      case "GET /products":
        body = await getAllProducts.getAllProductsRequest();
        break;
        
      case "DELETE /products/{id}":
        const deleteId = event.pathParameters.id;
        await deleteProduct.deleteProductRequest(deleteId);
        body = `Deleted item ${event.pathParameters.id}`;
        break;

      case "PUT /products":
        let requestJSON = JSON.parse(event.body);
        await inputProduct.inputProductRequest(requestJSON);
        body = `Put item ${requestJSON.productId}`;
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


function currencyValidate(currency){
  const CURRENCIES = ["USD", "CAD", "AUD"];

  if(CURRENCIES.find(x => x == currency)){
    console.log("Currency bool-->");
    console.log(CURRENCIES.find(x => x == currency));
    return true;
  }

  return false;
}
