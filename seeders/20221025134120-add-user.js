'use strict';

 /**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [
      {
       name: 'Cristian',
       email: 'cbo@misena.edu.co',
       password: '1234'
     },
     {
      name: 'Valentina',
       email: 'vale@misena.edu.co',
       password: '321'
     }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
