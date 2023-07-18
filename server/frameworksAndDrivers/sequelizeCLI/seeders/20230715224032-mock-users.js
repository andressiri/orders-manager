"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const salt = bcryptjs_1.default.genSaltSync();
const hashedPassword = bcryptjs_1.default.hashSync("123456", salt);
const usersSeed = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("Users", [
            {
                id: "4f097dd4-8150-41ac-8eef-1aca480fca4f",
                name: "Fake User",
                email: "fake.user@email.com",
                password: hashedPassword,
                createDate: new Date(),
                updateDate: new Date(),
            },
            {
                id: "89acd499-1ee8-40ce-aa1a-d233f3126a00",
                name: "User Mocked",
                email: "user.mocked@email.com",
                password: hashedPassword,
                createDate: new Date(),
                updateDate: new Date(),
            },
            {
                id: "3e3e3357-cf7c-418a-b731-35edacbae4b9",
                name: "Mock User",
                email: "mock.user@email.com",
                password: hashedPassword,
                createDate: new Date(),
                updateDate: new Date(),
            },
            {
                id: "66b8dbc3-88bf-4a87-afa9-314a3117e593",
                name: "Test Mock",
                email: "test.mock@email.com",
                password: hashedPassword,
                createDate: new Date(),
                updateDate: new Date(),
            },
        ], {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete("Users", {});
    },
};
exports.default = usersSeed;
