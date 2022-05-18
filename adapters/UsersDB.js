
const stockData = [{id: 1, title: "user1", age: 20 }, {id: 2, title: "user2", age: 33}, {id: 3, title: "user3", age: 56 } ]


const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");


const app = express();


const documentClient = new AWS.DynamoDB.DocumentClient();
const USERS_TABLE = process.env.USERS_TABLE;

app.use(express.json());

const getUserValue = async (userId = "test") => {
   /* try {
        
        return stockData.find(x=> x.id == stockID)
    }
    catch (err) {
        console.log(err)
        return err
    } */
    let params = {
      TableName : USERS_TABLE,
      Key:{
        'userId': userId
      }
  }

  try {
      const userData = await documentClient.get(params).promise()
      return userData
  }
  catch (err) {
      console.log(err)
      return err
  }

}
module.exports = {
  getUserValue
}
