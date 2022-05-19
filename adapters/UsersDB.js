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

const inputUserValue = async (requestJSON) => {


  try {
      const userData = await documentClient.put({
        TableName: USERS_TABLE,
        Item: {
          'userId': requestJSON.userId,
          name: requestJSON.name
        }
      }).promise()
      return userData
  }
  catch (err) {
      console.log(err)
      return err
  }
}



const deleteUserValue = async (deleteId) => {

  let params = {
    TableName : USERS_TABLE,
    Key:{
      'userId': deleteId
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


const getAllUsersValue = async () => {

  let params = {
    TableName : USERS_TABLE,
    Select: "ALL_ATTRIBUTES"
}

try {
    const usersData = await documentClient.scan(params).promise();
    return usersData
}
catch (err) {
    console.log(err)
    return err
}
}

module.exports = {
  getUserValue,
  getAllUsersValue,
  deleteUserValue,
  inputUserValue
}
