"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getFutureTimestamp = (days) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    return currentDate;
};
const ordersSeed = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("Orders", [
            {
                id: "cc30f827-5bbe-4c54-b915-994a13b8915a",
                status: "Approve",
                shippingAddress: "5th street number 7612",
                shippingPromise: getFutureTimestamp(2),
                createDate: new Date(),
                updateDate: new Date(),
                vendorId: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
                clientId: "3e3e3357-cf7c-418a-b731-35edacbae4b9",
            },
            {
                id: "e3d3c72b-915b-497c-88be-697e9ca7781c",
                status: "Cancel",
                shippingAddress: "7th street number 8743",
                shippingPromise: getFutureTimestamp(2),
                createDate: new Date(),
                updateDate: new Date(),
                vendorId: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
                clientId: "66b8dbc3-88bf-4a87-afa9-314a3117e593",
            },
            {
                id: "287197a8-49cc-4e5c-8091-dd1561bd659c",
                status: "Delivery",
                shippingAddress: "2th street number 134",
                shippingPromise: getFutureTimestamp(5),
                createDate: new Date(),
                updateDate: new Date(),
                vendorId: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
                clientId: "66b8dbc3-88bf-4a87-afa9-314a3117e593",
            },
            {
                id: "78d1d067-d7ce-430f-930d-7a9d265b40b0",
                status: "Traveling",
                shippingAddress: "17th street number 9218",
                shippingPromise: getFutureTimestamp(1),
                createDate: new Date(),
                updateDate: new Date(),
                vendorId: "66b8dbc3-88bf-4a87-afa9-314a3117e593",
                clientId: "3e3e3357-cf7c-418a-b731-35edacbae4b9",
            },
        ], {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete("Orders", {});
    },
};
exports.default = ordersSeed;
