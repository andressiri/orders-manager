const User = {
  id: {
    type: "uuid",
    primaryKey: true,
    unique: true,
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    unique: true,
    required: true,
    isEmail: true,
  },
  password: {
    type: "string",
    required: true,
  },
  createDate: {
    type: "date",
    required: true,
  },
  updateDate: {
    type: "date",
    required: true,
  },
  hasMany: [
    { entity: "Order", as: "VendorOrders" },
    { entity: "Order", as: "ClientOrders" },
  ],
};

Object.freeze(User);

export default User;
