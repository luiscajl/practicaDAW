import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';


@Component({
  selector: 'ControlPanelNotificaciones',
  templateUrl: 'app/controlpanel/controlpanel/notificaciones.html',
  directives: [ROUTER_DIRECTIVES]
})

export class ControlPanelNotificaciones {

  constructor (private router: Router){}
    gotocontrolpanel(){
      let link = ['Control'];
      this.router.navigate(link);
    }
    gotoadmrecetarios(){
      let link = ['ControlRecetarios'];
      this.router.navigate(link);
    }

    gotoadmrecetas(){
      let link = ['ControlRecetas'];
      this.router.navigate(link);
    }

    gotoemail(){
      let link = ['ControlContrasenia'];
      this.router.navigate(link);
    }
    gotonotificaciones(){
      let link = ['ControlNotificaciones'];
      this.router.navigate(link);
    }
}
