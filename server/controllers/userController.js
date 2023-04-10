class userController {
  async registration(req, res) {}

  async login(req, res) {
  }

  async checkAuth(req, res) {
    res.send({message: 'All ok!'})
  }
}

module.exports =new userController()