const Item = {
  id: {
    type: "uuid",
    primaryKey: true,
    unique: true,
    required: true,
  },
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    maxLength: 1000,
  },
  url: {
    type: "string",
    isUrl: true,
    required: true,
  },
  price: {
    type: "float",
    decimals: 2,
    required: true,
  },
  quantity: {
    type: "integer",
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
  hasOne: [{ entity: "User", as: "Vendor" }],
  belongsToMany: [{ entity: "Order", as: "Orders" }],
};

Object.freeze(Item);

export default Item;
