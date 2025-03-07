"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TransactionSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    cardId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'IdCard',
        required: true,
    },
    reference: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    email: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'successful', 'failed'],
        default: 'pending',
    },
    currency: { type: String, default: 'NGN' },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });
//# sourceMappingURL=transaction.schema.js.map