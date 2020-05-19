const db = require('./../../models');

class AuthService {
  static async signUp({ email, password }) {
    try {
      const user = await db.User.create({
        email,
        password,
      });

      return user;
    } catch (e) {
      console.error(`AuthService.signUp error - ${e.message}`);
      throw e;
    }
  }
}

module.exports = AuthService;
