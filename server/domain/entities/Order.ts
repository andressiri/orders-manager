const statusValuesArray = ["Approve", "Cancel", "Delivery", "Traveling"];
Object.freeze(statusValuesArray);

const Order = {
  id: {
    type: "uuid",
    primaryKey: true,
    unique: true,
    required: true,
  },
  status: {
    type: "string",
    values: statusValuesArray,
    required: true,
  },
  shippingAddress: {
    type: "string",
    required: true,
  },
  shippingPromise: {
    type: "date",
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
  belongsTo: [
    { entity: "User", as: "Vendor" },
    { entity: "User", as: "Client" },
  ],
  belongsToMany: [{ entity: "Item", as: "Items" }],
};

Object.freeze(Order);

export default Order;
