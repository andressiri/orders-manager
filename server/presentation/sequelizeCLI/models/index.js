"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const configDB_1 = require("../config/configDB");
const modelsArray_1 = __importDefault(require("./modelsArray"));
const env = process.env.NODE_ENV || "development";
const config = configDB_1.dbConfigs[env];
const db = {}; // eslint-disable-line @typescript-eslint/no-explicit-any
let sequelize;
if (config.uri) {
    sequelize = new sequelize_1.Sequelize(config.uri, config);
}
else {
    sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
modelsArray_1.default.forEach((model) => {
    db[model.name] = model.model(sequelize);
});
modelsArray_1.default.forEach((model) => {
    if (db[model.name].associate)
        db[model.name].associate(db);
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
exports.default = db;
