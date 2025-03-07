import mongoose, { Model } from 'mongoose';
import { Transaction } from './transaction.schema';
import { IndigeneCertificateService } from 'src/indigene-certificate/indigene-certificate.service';
export declare class TransactionService {
    private readonly transactionModel;
    private readonly indigeneCertificateService;
    constructor(transactionModel: Model<Transaction>, indigeneCertificateService: IndigeneCertificateService);
    private readonly baseUrl;
    private readonly secretKey;
    initializePayment(data: {
        cardId: string;
        userId: string;
        amount: number;
        email: string;
        currency?: string;
    }): Promise<any>;
    verifyPayment(reference: string): Promise<any>;
    getUserTransactions(userId: string): Promise<(mongoose.Document<unknown, {}, Transaction> & Transaction & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getPaginatedData(page: number, limit: number): Promise<{
        data: (mongoose.Document<unknown, {}, Transaction> & Transaction & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        hasNextPage: boolean;
    }>;
    getApprovedItems(): Promise<any[]>;
}
