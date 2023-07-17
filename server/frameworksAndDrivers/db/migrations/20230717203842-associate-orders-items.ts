import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */

const associateOrdersItemsMigration = {
  async up(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.addColumn("OrderItems", "orderId", {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Orders",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });

      await queryInterface.addColumn("OrderItems", "itemId", {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Items",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    });
  },

  async down(queryInterface: QueryInterface) {
    queryInterface.sequelize.transaction(async () => {
      await queryInterface.removeColumn("OrderItems", "orderId");
      await queryInterface.removeColumn("OrderItems", "itemId");
    });
  },
};

export default associateOrdersItemsMigration;
