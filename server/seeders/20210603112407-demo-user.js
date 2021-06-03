'use strict';
var bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',[{
      username:'kim',
      birth:'19920304',
      email:'zkdlwu94@gmail.com',
      password:bcrypt.hashSync(req.body.password,8),
      createdAt:new Date(),
      updatedAt:new Date(),

    }])

    const courses = await queryInterface.sequelize.query(
      `SELECT id from users where email='zkdlwu94@gmail.com';`
    );

    return await queryInterface.bulkInsert('user_roles',[{
      roleId:1,
      userId:courses,
      createdAt:new Date(),
      updatedAt:new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users',null,{});
  }
};
