import { NgIf } from "@angular/common";

export interface Request {
    reqId: number,
    userId: number,
    reqType: string,
    reqAmount: number,
    reqStatus: number,
    submitDate: string,
    approvedDate: string,
    manager: string
}