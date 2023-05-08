import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '@app/core/services/general-service.service';
import { UserService } from '@modules/auth/services';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    usuarioLog: any;

    constructor(public userService: UserService, private service: GeneralServiceService) { }

    ngOnInit() {
        this.usuarioLog = localStorage.getItem('usuario');

    }

    logout() {
        this.service.logout();
    }
}
