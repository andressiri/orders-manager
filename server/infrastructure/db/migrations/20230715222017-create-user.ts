import { QueryInterface } from "sequelize";
import { User as user } from "../config/getDomainRules";
import { setupMigrationField } from "../repository/config";

/** @type {import('sequelize-cli').Migration} */

const usersMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "Users",
        {
          id: setupMigrationField(user.id),
          name: setupMigrationField(user.name),
          email: setupMigrationField(user.email),
          password: setupMigrationField(user.password),
          createDate: setupMigrationField(user.createDate),
          updateDate: setupMigrationField(user.updateDate),
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
      await queryInterface.dropTable("Users", { transaction });
    });
  },
};

export default usersMigration;
