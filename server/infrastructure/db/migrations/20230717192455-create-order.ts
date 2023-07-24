import { QueryInterface } from "sequelize";
import { Order as order } from "../config/getDomainRules";
import { setupMigrationField } from "../repository/config";

/** @type {import('sequelize-cli').Migration} */

const ordersMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "Orders",
        {
          id: setupMigrationField(order.id),
          status: setupMigrationField(order.status),
          shippingAddress: setupMigrationField(order.shippingAddress),
          shippingPromise: setupMigrationField(order.shippingPromise),
          createDate: setupMigrationField(order.createDate),
          updateDate: setupMigrationField(order.updateDate),
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
      await queryInterface.dropTable("Orders", { transaction });
    });
  },
};

export default ordersMigration;
