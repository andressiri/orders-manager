import { QueryInterface } from "sequelize";

const itemsSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          id: "670594aa-48fb-4766-9009-59aebca91891",
          title: "Item 1",
          description: "A very expensive item",
          url: "http://localhost:3000/items/670594aa-48fb-4766-9009-59aebca91891",
          price: "238",
          quantity: "5",
          createDate: new Date(),
          updateDate: new Date(),
          vendorId: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
        },
        {
          id: "8f05bc8c-7f01-4425-98d0-fd7cb4b06bcc",
          title: "Item 2",
          description: "A cheap item",
          url: "http://localhost:3000/items/8f05bc8c-7f01-4425-98d0-fd7cb4b06bcc",
          price: "23",
          quantity: "112",
          createDate: new Date(),
          updateDate: new Date(),
          vendorId: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
        },
        {
          id: "3311be90-b1da-4a1d-989c-bb8abc98c6fb",
          title: "Item 3",
          description: "",
          url: "http://localhost:3000/items/3311be90-b1da-4a1d-989c-bb8abc98c6fb",
          price: "130",
          quantity: "21",
          createDate: new Date(),
          updateDate: new Date(),
          vendorId: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
        },
        {
          id: "50c14af5-1a7c-4d62-99f0-7880fbc7575d",
          title: "Item 4",
          description: "",
          url: "http://localhost:3000/items/50c14af5-1a7c-4d62-99f0-7880fbc7575d",
          price: "80",
          quantity: "42",
          createDate: new Date(),
          updateDate: new Date(),
          vendorId: "66b8dbc3-88bf-4a87-afa9-314a3117e593",
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Items", {});
  },
};

export default itemsSeed;
