/**
 * controllers for the user resources.
 * Only the user of type ADMIN should be able to performs the operations
 * define in the User controller
 */
const User = require("../models/user.model")
const objectConverter = require("../utils/objectConverter")

const fetchAll = async (res) => {
    let users
    try{
        users = await User.find()
     }catch (err){
     console.err('error while fetching the users')
     res.status(500).send({
        message: "Some internal error occured"
     })
    }
    return users
}

const fetchByName = async (userNameReq, res) =>{
    let users
    try {
        users = await User.find({
            Name: userNameReq
        });
    } catch (err) {
        console.err("error while fetching the user for userName : ", userNameReq)
        res.status(500).send({
            message: "some internal error occured"
        })
    }
    return users
}

const fetchByTypeAndStatus = async (userTypeReq, userStatusReq, res) => {
    let users
    try {
        users = await User.find({
            userType: userTypeReq,
            userStatus: userStatusReq
        });
    } catch (err) {
        console.err(`error while fetching the user for userType [${userTypeReq}] and userStatus [${userStatusReq}] `);
        res.status(500).send({
            message: "some internal error occured"
        })
    }
    return users
}

const fetchByType = async (userTypeReq, res) => {
    let users
    try {
        users = await User.find({
            userType: userTypeReq,
        });
    } catch (err) {
        console.err(`error while fetching the user for userType [${userTypeReq}] `);
        res.status(500).send({
            message: "some internal error occured"
        })
    }
    return users
}

const fetchByStatus = async (userStatusReq, res) => {
    let users
    try {
        users = await User.find({
            userType: userStatusReq 
        });
    } catch (err) {
        console.err(`error while fetching the user for userType [${userStatusReq}] `);
        res.status(500).send({
            message: "some internal error occured"
        })
    }
    return users
}
/**
 * Fetch the list of all users
 */
exports .findAll = async (req, res) => {
   let users
   let userTypeReq = req.query.userType
   let userStatusReq = req.query.userStatus
   let userNameReq = req.query.name
if(userNameReq) {
       users = await fetchByName(userNameReq, res)
} else if (userTypeReq && userStatusReq){
    users = await fetchByTypeAndStatus(userTypeReq, userStatusReq, res)
} else if(userTypeReq) {
    users = await fetchByType(userTypeReq, res)
} else if (userStatusReq) {
 users = await fetchByStatus(userStatusReq, res)
} else {
    users = await fetchAll(res)
}
res.status(200).send(objectConverter.userResponse(users))
}

exports.findById = async (req, res) => {
  const userIdReq = req.params.userId
  let user
  try {
    user = await User.find({
    userId: userIdReq    
    })
    if(user.length > 0) {
        res.status(200).send(objectConverter.userResponse(user))
      }else {
        res.status(200).send({
            message: `User with this id [${userIdReq}] is not present`
        })
      }
  } catch (err) {
    res.status(500).send({
        message: "Internal Server  Error"
    })
  }
}

exports.update = async (req, res) => {
  const userIdReq = req.params.userId
  try {
       const user = await User.findOneAndUpdate({
        userId: userIdReq
       }, {
        userStatus: req.body.userStatus
       }).exec()
       if (user) {
        res.status(200).send({
            message : `User record has been updated successfully`
           })
       } else {
        res.status(200).send({
            message: `No user with id found!`
          })
        }
     } catch (err) {
        console.log("Error while updating the record", err.message)
        res.status(500).send({
            message: "Some internal error occured"
        })
       }
}