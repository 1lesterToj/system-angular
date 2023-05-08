import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from '@app/core/services/general-service.service';
import { GenericNotification } from '@app/shared/notificaciones';
import { Observable } from 'rxjs';

@Component({
  selector: 'sb-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;
  constructor(private router: Router, private servicios: GeneralServiceService, private notificaciones: GenericNotification) { }

  ngOnInit() { }


  async login() {

    console.log("usuario: ", this.username);
    console.log("password: ", this.password);
    const login = {
      username: this.username,
      password: this.password
    };

    this.servicios.login(login).toPromise()
      .then(async (res: any) => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('guard', 'Authorization');
        localStorage.setItem('usuario', res.username);
        await this.notificaciones.notificacionSuccess();
        if (login) {
          this.router.navigate(['/dashboard']);
        }
      })
      .catch(err => {

      });
  }

}

