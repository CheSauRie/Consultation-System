'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Consultation_requests', 'consultation_id', 'schedule_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Consultation_requests', 'schedule_id', 'consultation_id');
  }
};
