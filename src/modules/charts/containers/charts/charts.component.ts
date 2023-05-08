import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '@app/core/services/general-service.service';
import { GenericNotification } from '@app/shared/notificaciones';

@Component({
    selector: 'sb-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts.component.html',
    styleUrls: ['charts.component.scss'],
})
export class ChartsComponent implements OnInit {

    nitProductor: string | undefined;
    razonSocial: string | undefined
    pesajeTotalKg: any;
    tipoCafe: any;


    constructor(private servicio: GeneralServiceService, private notificaciones: GenericNotification) { }
    ngOnInit() { }

    saveAccount() {
        const saveData = {
            nitProductor: this.nitProductor,
            razonSocial: this.razonSocial,
            pesajeTotalKg: this.pesajeTotalKg,
            tipoCafe: this.tipoCafe
        }

        this.servicio.saveData(saveData).toPromise()
            .then(res => {
                this.notificaciones.notificacionGenerica('Cuenta Creada', 'success');
            })
            .catch(err => {

            })
    }
}
