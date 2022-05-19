const AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient();
const USERS_TABLE = process.env.USERS_TABLE;


const getUserValue = async (userId = "test") => {

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
