import { QueryInterface } from "sequelize";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync();
const hashedPassword = bcrypt.hashSync("123456", salt);

const usersSeed = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: uuid(),
          name: "Fake User",
          email: "fake.user@email.com",
          password: hashedPassword,
          createDate: new Date(),
          updateDate: new Date(),
        },
        {
          id: uuid(),
          name: "User Mocked",
          email: "user.mocked@email.com",
          password: hashedPassword,

          createDate: new Date(),
          updateDate: new Date(),
        },
        {
          id: uuid(),
          name: "Mock User",
          email: "mock.user@email.com",
          password: hashedPassword,
          createDate: new Date(),
          updateDate: new Date(),
        },
        {
          id: uuid(),
          name: "Test Mock",
          email: "test.mock@email.com",
          password: hashedPassword,
          createDate: new Date(),
          updateDate: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Users", {});
  },
};

export default usersSeed;
