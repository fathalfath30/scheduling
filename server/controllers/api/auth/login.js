/*
//
//  ______    _   _           _  __      _   _     ____   ___
// |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
// | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
// |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
// | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
// |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
//
// Written by Fathalfath30.
// Email : fathalfath30@gmail.com
// Follow me on:
//  Github : https://github.com/fathalfath30
//  Gitlab : https://gitlab.com/Fathalfath30
//
*/

const users = require ('../../../models').users
const {Op} = require ('sequelize')

module.exports = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (!username) {
    return res.status (400).send ({
      code: 400,
      message: 'Username is required!',
    })
  }

  if (!password) {
    return res.status (400).send ({
      code: 400,
      message: 'Password is required!',
    })
  }

  const data = await users.findOne ({
    where: {
      [Op.or]: {
        username: {
          [Op.like]: username,
        },
        email: {
          [Op.like]: username,
        },
      },
    },
  })

  return res.send (data)
}
