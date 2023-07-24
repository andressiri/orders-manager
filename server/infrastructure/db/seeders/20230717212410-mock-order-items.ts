import { QueryInterface } from "sequelize";

const orderItemsSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "OrderItems",
      [
        {
          id: 1,
          orderId: "cc30f827-5bbe-4c54-b915-994a13b8915a",
          itemId: "670594aa-48fb-4766-9009-59aebca91891",
          createDate: new Date(),
          updateDate: new Date(),
        },
        {
          id: 2,
          orderId: "cc30f827-5bbe-4c54-b915-994a13b8915a",
          itemId: "8f05bc8c-7f01-4425-98d0-fd7cb4b06bcc",
          createDate: new Date(),
          updateDate: new Date(),
        },
        {
          id: 3,
          orderId: "cc30f827-5bbe-4c54-b915-994a13b8915a",
          itemId: "3311be90-b1da-4a1d-989c-bb8abc98c6fb",
          createDate: new Date(),
          updateDate: new Date(),
        },
        {
          id: 4,
          orderId: "e3d3c72b-915b-497c-88be-697e9ca7781c",
          itemId: "670594aa-48fb-4766-9009-59aebca91891",
          createDate: new Date(),
          updateDate: new Date(),
        },
        {
          id: 5,
          orderId: "287197a8-49cc-4e5c-8091-dd1561bd659c",
          itemId: "3311be90-b1da-4a1d-989c-bb8abc98c6fb",
          createDate: new Date(),
          updateDate: new Date(),
        },
        {
          id: 6,
          orderId: "287197a8-49cc-4e5c-8091-dd1561bd659c",
          itemId: "8f05bc8c-7f01-4425-98d0-fd7cb4b06bcc",
          createDate: new Date(),
          updateDate: new Date(),
        },
        {
          id: 7,
          orderId: "78d1d067-d7ce-430f-930d-7a9d265b40b0",
          itemId: "50c14af5-1a7c-4d62-99f0-7880fbc7575d",
          createDate: new Date(),
          updateDate: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("OrderItems", {});
  },
};

export default orderItemsSeed;
