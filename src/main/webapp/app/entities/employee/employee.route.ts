import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeePopupComponent } from './employee-dialog.component';
import { EmployeeDeletePopupComponent } from './employee-delete-dialog.component';

import { Principal } from '../../shared';


export const employeeRoute: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Employees'
    }
  }, {
    path: 'employee/:id',
    component: EmployeeDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Employees'
    }
  }
];

export const employeePopupRoute: Routes = [
  {
    path: 'employee-new',
    component: EmployeePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Employees'
    },
    outlet: 'popup'
  },
  {
    path: 'employee/:id/edit',
    component: EmployeePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Employees'
    },
    outlet: 'popup'
  },
  {
    path: 'employee/:id/delete',
    component: EmployeeDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Employees'
    },
    outlet: 'popup'
  }
];
