import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard {

  private helper = new JwtHelperService();

  constructor(
    public router: Router
    ){}

  canActivate(): boolean {
    if(this.isLogin()){
      return true;
    }else{
      swal.fire('Opss..','Realiza el ingreso a nuestra aplicacion' ,'error');
      this.router.navigate(['/']);
      return false;
    }

  }

  isLogin(){
    var userToken = JSON.parse(sessionStorage.getItem("token")|| '{}');
    if(userToken.length != undefined){
      return true;
    } else{
      return false;
    }
  }

  getToken() {
    return sessionStorage.getItem("token");
  }

  getId() {
    return sessionStorage.getItem("id");
  }

  setToken(token: string): void {
    sessionStorage.setItem("token", token);
  }

  setId(id: string): void {
    sessionStorage.setItem("id", id);
  }

  getTokenIdUser(token: string)  {
    const decoded = this.helper.decodeToken(token);

    if (decoded.exp === undefined) return null;

    const idUser = decoded.id;
    return idUser;
  }

}
