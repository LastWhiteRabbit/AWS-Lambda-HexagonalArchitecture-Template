const AWS = require("aws-sdk");
const { fromString } = require('uuidv4');

const documentClient = new AWS.DynamoDB.DocumentClient();
const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE;


const getProductValue = async (productId = "1") => {

    let params = {
      TableName : PRODUCTS_TABLE,
      Key:{
        productId: productId
      }
  }

  try {
      const productData = await documentClient.get(params).promise()
      
      console.log("ProductsDB.js productValue ->");
      console.log(productData);

      return productData
  }
  catch (err) {
      console.log(err)
      return err
  }
}

const inputProductValue = async (requestJSON) => {


  try {
      const productData = await documentClient.put({
        TableName: PRODUCTS_TABLE,
        Item: {
          productId: fromString(requestJSON.productId),
          description: requestJSON.description,
          inStock: requestJSON.inStock,
          price: requestJSON.price,
          review: requestJSON.review,
          title: requestJSON.title
        }
      }).promise()
      return productData
  }
  catch (err) {
      console.log(err)
      return err
  }
}



const deleteProductValue = async (deleteId) => {

  let params = {
    TableName : PRODUCTS_TABLE,
    Key:{
      'productId': deleteId
    }
}

try {
    const userData = await documentClient.delete(params).promise()
    return userData
}
catch (err) {
    console.log(err)
    return err
}
}


const getAllProductsValue = async () => {

  let params = {
    TableName : PRODUCTS_TABLE,
    Select: "ALL_ATTRIBUTES"
}

try {
    const productsData = await documentClient.scan(params).promise();
    return productsData
}
catch (err) {
    console.log(err)
    return err
}
}

module.exports = {
  getProductValue,
  getAllProductsValue,
  deleteProductValue,
  inputProductValue
}
