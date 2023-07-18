import { QueryInterface } from "sequelize";
import { Item as item } from "../config/getEnterpriseBusinessRules";
import { setupMigrationField } from "../repository/config";

/** @type {import('sequelize-cli').Migration} */

const itemsMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "Items",
        {
          id: setupMigrationField(item.id),
          title: setupMigrationField(item.title),
          description: setupMigrationField(item.description),
          url: setupMigrationField(item.url),
          price: setupMigrationField(item.price),
          quantity: setupMigrationField(item.quantity),
          createDate: setupMigrationField(item.createDate),
          updateDate: setupMigrationField(item.updateDate),
        },
        {
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci",
          transaction,
        }
      );
    });
  },

  async down(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable("Items", { transaction });
    });
  },
};

export default itemsMigration;
