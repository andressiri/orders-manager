import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const orderItemsMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        "OrderItems",
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          createDate: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updateDate: {
            allowNull: false,
            type: DataTypes.DATE,
          },
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
      await queryInterface.dropTable("OrderItems", { transaction });
    });
  },
};

export default orderItemsMigration;
