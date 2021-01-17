import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'App de teste';

  constructor(
    private oauthService: OAuthService,
    private router: Router) {
  }

  public login() {
      this.oauthService.initImplicitFlow();
  }

  public logoff() {
      this.oauthService.logOut();
      this.router.navigate(['/login']);
  }

  public get userName() {
      const claims: any = this.oauthService.getIdentityClaims();
      if (!claims) {
        return null;
      }
      return claims.name;
  }

  public get userMatricula() {
      const claims: any = this.oauthService.getIdentityClaims();
      if (!claims) {
        return null;
      }
      return claims.preferred_username;
  }

  ngOnInit() {
  }

}
