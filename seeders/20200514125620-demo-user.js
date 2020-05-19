'use strict';
var bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const hashPassword = bcrypt.hashSync(
      'trinity23',
      bcrypt.genSaltSync(10),
      null,
    );
    return queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'john.dou@email.com',
          password: hashPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
