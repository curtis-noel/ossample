import { Department } from '../department';
export class Employee {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public hireDate?: any,
        public salary?: number,
        public commissionPct?: number,
        public department?: Department,
    ) {
    }
}
