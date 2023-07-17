"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getEnterpriseBusinessRules_1 = require("../config/getEnterpriseBusinessRules");
const config_1 = require("../repository/config");
/** @type {import('sequelize-cli').Migration} */
const usersMigration = {
    async up(queryInterface) {
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.createTable("Users", {
                id: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.User.id),
                name: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.User.name),
                email: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.User.email),
                password: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.User.password),
                createDate: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.User.createDate),
                updateDate: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.User.updateDate),
            }, {
                charset: "utf8mb4",
                collate: "utf8mb4_unicode_ci",
                transaction,
            });
        });
    },
    async down(queryInterface) {
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.dropTable("Users", { transaction });
        });
    },
};
exports.default = usersMigration;
