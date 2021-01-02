const UsersService = require('../services/users.service')

class UsersController {
    async getUsers(req, res) {
       return res.status(200).json(await UsersService.getUsers());
    }

    async getUserById(req, res) {
        const user  = await UsersService.getUsersById(req.params.id)
        if(user === null) {
          return res.status(404).json('not found');
        }
        return  res.status(200).json(user);
    }

    async createUser(req, res) {
        if (req.body.user && req.body.user.id) {
            if (req.users.hasOwnProperty(req.body.user.id))
                return res
                    .status(409)
                    .send({message: 'User already exists.'})

            req.users[req.body.user.id] = req.body.user

            let result = await UsersService.createUser(req.users)

            if (result) return res.status(200).send(result)
            else
                return res
                    .status(500)
                    .send({message: 'Unable create user.'})
        } else
            return res
                .status(400)
                .send({message: 'Bad request.'})
    }

    async updateUser(req, res) {
        if (req.body.user && req.body.user.id) {
            if (!req.users.hasOwnProperty(req.body.user.id))
                return res
                    .status(404)
                    .send({message: 'User not found.'})

            req.users[req.body.user.id] = req.body.user

            let result = await UsersService.updateUser(req.users)

            if (result) return res.status(200).send(result)
            else
                return res
                    .status(500)
                    .send({message: 'Unable update user.'})
        } else
            return res
                .status(400)
                .send({message: 'Bad request.'})
    }

    async deleteUser(req, res) {
        if (req.query.id) {
            if (req.users.hasOwnProperty(req.query.id)) {
                delete req.users[req.query.id]

                let result = await UsersService.deleteUser(
                    req.users
                )

                if (result) return res.status(200).send(result)
                else
                    return res
                        .status(500)
                        .send({message: 'Unable delete user.'})
            } else
                return res
                    .status(404)
                    .send({message: 'User not found.'})
        } else
            return res
                .status(400)
                .send({message: 'Bad request.'})
    }
}

module.exports = new UsersController()
