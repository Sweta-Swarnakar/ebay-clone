const mongoose = require("mongoose")

const priceSchema = new mongoose.Schema(
    {
        price_range: { type: String, trim:true, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("price", priceSchema);

 