'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('users', 'firstName', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn('users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn('users', 'passwordDigest', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('users', 'firstName', {
      firstName: Sequelize.STRING
    })
    await queryInterface.changeColumn('users', 'lastName', {
      lastName: Sequelize.STRING
    })
    await queryInterface.changeColumn('users', 'username', {
      username: Sequelize.STRING
    })
    await queryInterface.changeColumn('users', 'passwordDigest', {
      passwordDigest: Sequelize.STRING
    })
  }
}
