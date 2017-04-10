import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OssampleDepartmentModule } from './department/department.module';
import { OssampleEmployeeModule } from './employee/employee.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        OssampleDepartmentModule,
        OssampleEmployeeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OssampleEntityModule {}
