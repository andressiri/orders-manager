"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const salt = bcryptjs_1.default.genSaltSync();
const hashedPassword = bcryptjs_1.default.hashSync("123456", salt);
const usersSeed = {
    async up(queryInterface) {
        await queryInterface.bulkInsert("Users", [
            {
                id: (0, uuid_1.v4)(),
                name: "Fake User",
                email: "fake.user@email.com",
                password: hashedPassword,
                createDate: new Date(),
                updateDate: new Date(),
            },
            {
                id: (0, uuid_1.v4)(),
                name: "User Mocked",
                email: "user.mocked@email.com",
                password: hashedPassword,
                createDate: new Date(),
                updateDate: new Date(),
            },
            {
                id: (0, uuid_1.v4)(),
                name: "Mock User",
                email: "mock.user@email.com",
                password: hashedPassword,
                createDate: new Date(),
                updateDate: new Date(),
            },
            {
                id: (0, uuid_1.v4)(),
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
