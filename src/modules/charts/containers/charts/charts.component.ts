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
    pesajeTotalKg: any | undefined;
    tipoCafe: any;
    viewTable: boolean = false;
    cantidadParcialidades: any | undefined;
    usuarioLog: any = '';
    tableCols: string[] = ['contador', 'numerocuenta', 'nit_productor', 'cantidadP', 'pesajeT', 'tipoC'];//variables tabla operador
    hText: string[] = ['ID.', 'Número de cuenta', 'NIT de productor', 'Cantidad de parcialidades', 'Pesaje total', 'Tipo de café'];//encabezado tabla operador
    tableData: {}[] = [{}];
    constructor(
        private servicio: GeneralServiceService,
        private notificaciones: GenericNotification,
        //  private sideNavComponent: SideNavComponent
    ) { }

    async ngOnInit() {
        await this.accountData();
    }

    saveAccount() {
        const saveData = {
            nitProductor: this.nitProductor,
            usuarioOpera: this.usuarioLog,
            pesajeTotalKg: this.pesajeTotalKg,
            tipoCafe: this.tipoCafe,
            cantidadParcialidades: this.cantidadParcialidades,
        }

        this.servicio.saveData(saveData).toPromise().then(res => {
            this.notificaciones.notificacionGenerica('Cuenta Creada', 'success');
            this.viewTable = false;
        })
            .catch(err => {
                console.log(err);
                this.notificaciones.notificacionGenerica('Error', 'info');
            })
    }

    cleanInput() {
        this.nitProductor = "";
        this.usuarioOpera = "";
        this.pesajeTotalKg = "";
        this.tipoCafe = "";
        this.cantidadParcialidades = "";
    }

    async accountData() {
        this.usuarioLog = localStorage.getItem('usuario');
        const objetoTemp: any = {
            username: this.usuarioLog
        }
        //SE OBTIENE NIT DEL USUARIO LOGUEADO
        await this.servicio.getNitUser(objetoTemp).toPromise()
            .then(async res => {
                console.log("SE OBTIENE DATOS DE USUARIO LOGUEADO:>>", res)
                //SE OBTIENE CUENTAS CREADAS AL NIT DEL USUARIO LOGUEADO
                const jsonTemp: any = {
                    nitProductor: res.data.nit
                }

                await this.servicio.dataAccount(jsonTemp).toPromise()
                    .then(res => {
                        console.log('CUENTAS DEL USUARIO LOGUEADO>>', res)
                        let cuentasLista: any = [];
                        res.data.forEach(async (element: any) => {

                            await cuentasLista.push({
                                contador: element.idCuenta,
                                numerocuenta: element.noCuenta,
                                nit_productor: element.nitProductor,
                                cantidadP: element.cantidadParcialidades,
                                pesajeT: element.pesajeTotalKg,
                                tipoC: element.tipoCafe,
                            })
                            this.tableData = cuentasLista;
                        });
                        this.viewTable = true;

                    })
                    .catch(error => {
                        console.log(error)
                    });
            })
            .catch(error => {
                console.log("NO SE PUEDE OBTENER DATOS DE USUARIO LOGUEADO:>>", error)

            });
    }

}