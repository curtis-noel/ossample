import { Employee } from '../employee';
export class Department {
    constructor(
        public id?: number,
        public departmentName?: string,
        public employee?: Employee,
    ) {
    }
}
