import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGuardGuard } from 'src/app/auth/login-guard.guard';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public id: string | null= '';
  public link!: string;

  constructor(
    private loginGuardGuard: LoginGuardGuard,
    public router: Router,
    ){
    this.id = this.loginGuardGuard.getId();
    this.link = `/posts/${this.id}`;
  }
}
