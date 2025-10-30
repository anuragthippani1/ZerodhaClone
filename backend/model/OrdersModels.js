const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

module.exports.OrdersModels = new model("order", OrdersSchema);
