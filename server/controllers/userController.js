const ApiError = require('../error/ApiError');
class userController {
  async registration(req, res) {}

  async login(req, res) {}

  async checkAuth(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('Ne zadan id!'));
    }
    res.json({ id });
  }
}

module.exports = new userController();
