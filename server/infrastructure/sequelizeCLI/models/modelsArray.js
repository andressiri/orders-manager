"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const order_1 = __importDefault(require("./order"));
const item_1 = __importDefault(require("./item"));
const orderItem_1 = __importDefault(require("./orderItem"));
const modelsArray = [
    {
        name: "User",
        model: user_1.default,
    },
    {
        name: "Order",
        model: order_1.default,
    },
    {
        name: "Item",
        model: item_1.default,
    },
    {
        name: "OrderItem",
        model: orderItem_1.default,
    },
];
exports.default = modelsArray;
