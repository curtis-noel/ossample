import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
@Injectable()
export class EmployeePopupService {
    private isOpen = false;
    constructor (
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private employeeService: EmployeeService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.employeeService.find(id).subscribe(employee => {
                employee.hireDate = this.datePipe
                    .transform(employee.hireDate, 'yyyy-MM-ddThh:mm');
                this.employeeModalRef(component, employee);
            });
        } else {
            return this.employeeModalRef(component, new Employee());
        }
    }

    employeeModalRef(component: Component, employee: Employee): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.employee = employee;
        modalRef.result.then(result => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
