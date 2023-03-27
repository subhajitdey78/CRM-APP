const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.update = async function (req, res) {
    try {
        await User.findOneAndUpdate(
            { userId: req.userId },
            { password: bcrypt.hashSync(req.body.password, 8) }
        ).exec() 
        res.status(200).send({
            message: "User record has been updated"
        })
    } catch(e) {
        console.log(e.message)
        res.status(500).send({
            message: "Internal server error!"
        })
    }
}

exports.updateUser = async function (req, res) {
    const userIdReq = req.params.userId;
    try {
        const user = await user.findOneAndUpdate({
            userId: userIdReq
        }, {
            name: req.body.name,
            userStatus: req.body.userStatus,
            userType: req.body.userType

        }).exec()
        res.status(200).send({

            message: `User record has been updated successfully`

        });
    } catch(err) {
        console.log("Error while upadting the recored", err.message);
        res.status(500).send({
            message: "Some internal error occured"
        })

    };
}