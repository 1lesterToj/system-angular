/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
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

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...chartsServices.services, ...chartsGuards.guards],
    declarations: [...chartsContainers.containers, ...chartsComponents.components, ParcialidadComponent],
    exports: [...chartsContainers.containers, ...chartsComponents.components],
})
export class ChartsModule {}
