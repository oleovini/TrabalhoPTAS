'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [{
      nome: 'Leo',
      sobrenome:'Vini',
      idade:10
    },
    {
      nome: 'Leu',
      sobrenome:'Vine',
      idade:11
    },
    {
      nome: 'Leu',
      sobrenome:'Vine',
      idade:12
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
