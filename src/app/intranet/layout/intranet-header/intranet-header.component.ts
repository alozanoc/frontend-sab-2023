import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({
  selector: 'app-intranet-header',
  templateUrl: './intranet-header.component.html',
  styleUrls: ['./intranet-header.component.scss']
})
export class IntranetHeaderComponent {

  authenticationService = inject(AuthenticationService)

  get fullName() {
    return this.authenticationService.currentUser.value?.name ?? 'Invitado'
  }
}
