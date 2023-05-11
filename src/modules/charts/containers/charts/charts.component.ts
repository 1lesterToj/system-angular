import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GeneralServiceService } from '@app/core/services/general-service.service';
import { GenericNotification } from '@app/shared/notificaciones';
import { SideNavComponent } from '@modules/navigation/containers';

@Component({
    selector: 'sb-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts.component.html',
    styleUrls: ['charts.component.scss'],
})
export class ChartsComponent implements OnInit {
    nitProductor: string | undefined;
    usuarioOpera: string | undefined
    pesajeTotalKg: any;
    tipoCafe: any;
    cantidadParcialidades: any;


    constructor(
        private servicio: GeneralServiceService,
        private notificaciones: GenericNotification,
      //  private sideNavComponent: SideNavComponent
         ) { }
    ngOnInit() {
    
     }

    saveAccount() {
        const saveData = {
            nitProductor: this.nitProductor,
            usuarioOpera: 'DISANTIZ',
            pesajeTotalKg: this.pesajeTotalKg,
            tipoCafe: this.tipoCafe,
            cantidadParcialidades: this.cantidadParcialidades,
        }

        this.servicio.saveData(saveData).toPromise().then(res => {
                this.notificaciones.notificacionGenerica('Cuenta Creada', 'success');
            })
            .catch(err => {
                console.log(err);
                this.notificaciones.notificacionGenerica('Error', 'info');
            })
    }
}