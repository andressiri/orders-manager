"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getEnterpriseBusinessRules_1 = require("../config/getEnterpriseBusinessRules");
const config_1 = require("../repository/config");
/** @type {import('sequelize-cli').Migration} */
const itemsMigration = {
    async up(queryInterface) {
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.createTable("Items", {
                id: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Item.id),
                title: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Item.title),
                description: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Item.description),
                url: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Item.url),
                price: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Item.price),
                quantity: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Item.quantity),
                createDate: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Item.createDate),
                updateDate: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Item.updateDate),
            }, {
                charset: "utf8mb4",
                collate: "utf8mb4_unicode_ci",
                transaction,
            });
        });
    },
    async down(queryInterface) {
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.dropTable("Items", { transaction });
        });
    },
};
exports.default = itemsMigration;
