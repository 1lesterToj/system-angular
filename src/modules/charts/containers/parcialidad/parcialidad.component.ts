import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GeneralServiceService } from '@app/core/services/general-service.service';
import { GenericNotification } from '@app/shared/notificaciones';

@Component({
  selector: 'sb-parcialidad',
  templateUrl: './parcialidad.component.html',
  styleUrls: ['./parcialidad.component.scss']
})
export class ParcialidadComponent implements OnInit {
  licenciaTransportista!: string;
  placaTransporte!: string;
  pesoParcialidad!: number;
  jsonTemporal!: any;

  constructor(
    private servicio: GeneralServiceService,
    private notificaciones: GenericNotification,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ParcialidadComponent>,
  ) { }

  ngOnInit(): void {
    console.log("DATOS DEL COMPONENTE ANTERIOR: ", this.dialogRef.componentInstance.data)
    this.jsonTemporal = this.dialogRef.componentInstance.data;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  async saveParcialidad() {
    const jsonEnviar = {
      noCuenta: this.jsonTemporal.numeroCuenta,
      nitProductor: this.jsonTemporal.nitProductor,
      licenciaTransportista: this.licenciaTransportista,
      placaTransporte: this.placaTransporte,
      pesoParcialidad: this.pesoParcialidad,
      usuarioOpera: localStorage.getItem('usuario'),
    };
    await this.servicio.saveParcialidad(jsonEnviar).toPromise()
      .then(async res => {
        await this.notificaciones.notificacionGenerica('PARCIALIDAD CREADA EXITOSAMENTE', 'success');
        this.clearFormulario();
      })
      .catch(err => {

      });
  }

  clearFormulario() {
    this.licenciaTransportista = '';
    this.placaTransporte = '';
    this.pesoParcialidad = 0;
  }

}
