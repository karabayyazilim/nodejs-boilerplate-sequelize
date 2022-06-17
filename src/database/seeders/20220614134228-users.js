'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Tests', [{
            firstName: 'John Doe',
            lastName: 'John Doe',
            email: 'John Doe',
            password: "121245",
            createdAt: "2019-03-01 00:00:00-06",
            updatedAt: "2019-03-01 00:00:00-06",
        }], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
