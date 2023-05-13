/* tslint:disable: ordered-imports*/
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as chartsComponents from './components';

/* Containers */
import * as chartsContainers from './containers';

/* Guards */
import * as chartsGuards from './guards';

/* Services */
import * as chartsServices from './services';
import { ParcialidadComponent } from './containers/parcialidad/parcialidad.component';
import { GenerictableCComponent } from './containers/generictable-c/generictable-c.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        FormsModule,
        MatDialogModule,
    ],
    entryComponents: [
        ParcialidadComponent
    ],
    providers: [...chartsServices.services, ...chartsGuards.guards],
    declarations: [...chartsContainers.containers, ...chartsComponents.components, ParcialidadComponent, GenerictableCComponent],
    exports: [...chartsContainers.containers, ...chartsComponents.components],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ChartsModule { }
