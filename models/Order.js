var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    book    : { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    quantity  : Number,
    price   : Number,
    side    : Boolean, // 0/false:sell 1/true:buy
    type    : Number,
    owner   : Number,
    status :  {type: Number, default: 1 },
    time: { type: Date, default: Date.now },
    parentTrade :  { type: mongoose.Schema.Types.ObjectId, ref: 'Trade' },
    childTrade :  { type: mongoose.Schema.Types.ObjectId, ref: 'Trade' },
});

module.exports = mongoose.model('Order', orderSchema);