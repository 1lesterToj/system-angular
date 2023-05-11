import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '@app/core/services/general-service.service';
import { GenericNotification } from '@app/shared/notificaciones';

@Component({
  selector: 'sb-parcialidad',
  templateUrl: './parcialidad.component.html',
  styleUrls: ['./parcialidad.component.scss']
})
export class ParcialidadComponent implements OnInit {
  nitProductor: string | undefined;
  licenciaTransportista: string | undefined
  pesoParcialidad: any;
  tipoCafe: any;
  noCuenta: string | undefined;
  placaTransporte : string | undefined;

  constructor(
    private servicio: GeneralServiceService, 
    private notificaciones: GenericNotification
    ) { }

  ngOnInit(): void {
  }
  saveAccount() {
    const saveData = {
        nitProductor: this.nitProductor,
        licenciaTransportista: this.licenciaTransportista,
        pesoParcialidad: this.pesoParcialidad,
        tipoCafe: this.tipoCafe,
        noCuenta: this.noCuenta,
        placaTransporte: this.placaTransporte,
        usuarioOpera: 'DISANTIZ'
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
