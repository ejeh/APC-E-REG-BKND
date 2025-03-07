"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_2 = require("@nestjs/mongoose");
const axios_1 = __importDefault(require("axios"));
const indigene_certificate_service_1 = require("../indigene-certificate/indigene-certificate.service");
let TransactionService = class TransactionService {
    constructor(transactionModel, indigeneCertificateService) {
        this.transactionModel = transactionModel;
        this.indigeneCertificateService = indigeneCertificateService;
        this.baseUrl = 'https://api.credodemo.com';
        this.secretKey = process.env.CREDO_SECRET_KEY;
    }
    async initializePayment(data) {
        const reference = `ref_${Date.now()}`;
        const bearer = 0;
        const newTransaction = new this.transactionModel({
            cardId: new mongoose_1.default.Types.ObjectId(data.cardId),
            userId: new mongoose_1.default.Types.ObjectId(data.userId),
            reference,
            amount: data.amount,
            email: data.email,
            status: 'pending',
            currency: data.currency || 'NGN',
        });
        await newTransaction.save();
        const url = `${this.baseUrl}/transaction/initialize`;
        const payload = { ...data, bearer, reference, amount: data.amount * 100 };
        const headers = {
            Authorization: `${this.secretKey}`,
            'Content-Type': 'application/json',
        };
        const response = await axios_1.default.post(url, payload, { headers });
        return response.data;
    }
    async verifyPayment(reference) {
        const url = `${this.baseUrl}/transaction/${reference}/verify`;
        const headers = { Authorization: `${this.secretKey}` };
        const transaction = await this.transactionModel.findOne({
            reference,
        });
        if (!transaction) {
            throw new Error('Transaction not found');
        }
        if (transaction.status !== 'pending') {
            throw new Error('Transaction already processed');
        }
        const response = await axios_1.default.get(url, { headers });
        if (response.data.status === 200) {
            await this.transactionModel.findOneAndUpdate({ reference }, { status: 'successful' });
        }
        else {
            await this.transactionModel.findOneAndUpdate({ reference }, { status: 'failed' });
        }
        return response.data;
    }
    async getUserTransactions(userId) {
        return this.transactionModel.find({ userId }).sort({ createdAt: -1 });
    }
    async getPaginatedData(page, limit) {
        const skip = (page - 1) * limit;
        const data = await this.transactionModel
            .find()
            .skip(skip)
            .limit(limit)
            .exec();
        const totalCount = await this.transactionModel.countDocuments().exec();
        return {
            data,
            hasNextPage: skip + limit < totalCount,
        };
    }
    async getApprovedItems() {
        const completedPayments = await this.transactionModel
            .find({ status: 'successful' })
            .populate('cardId')
            .exec();
        console.log('Completed Payments:', completedPayments);
        const itemIds = completedPayments.map((payment) => {
            if (!mongoose_1.Types.ObjectId.isValid(payment.cardId)) {
                throw new Error(`Invalid ObjectId: ${payment.cardId}`);
            }
            return payment.cardId.toString();
        });
        console.log('Item IDs:', itemIds);
        const approvedItems = await this.indigeneCertificateService.findByIds(itemIds);
        console.log(approvedItems);
        return approvedItems;
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Transaction')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        indigene_certificate_service_1.IndigeneCertificateService])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map