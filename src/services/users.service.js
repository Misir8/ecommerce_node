const fs = require('fs')
const User = require('../models/users.model');

class UsersService {
    async getUsers() {
        return await User.findAll({raw:true});
    }
    async getUsersById(id){
        return await User.findByPk(id);
    }

    createUser(data) {
        return new Promise((res, rej) => {
            fs.writeFile(
                'data.json',
                JSON.stringify(data),
                (err, response) => {
                    if (err) return res(false)

                    return res({ message: 'User created.' })
                }
            )
        })
    }

    updateUser(data) {
        return new Promise((res, rej) => {
            fs.writeFile(
                'data.json',
                JSON.stringify(data),
                (err, response) => {
                    if (err) return res(false)

                    return res({ message: 'User updated.' })
                }
            )
        })
    }

    deleteUser(data) {
        return new Promise((res, rej) => {
            fs.writeFile(
                'data.json',
                JSON.stringify(data),
                (err, response) => {
                    if (err) return res(false)

                    return res({ message: 'User deleted.' })
                }
            )
        })
    }
}

module.exports = new UsersService()
