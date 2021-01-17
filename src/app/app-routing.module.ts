import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { IndicesComponent } from './indices/indices.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { title: 'Home' }, canActivate: [AuthGuard]},
  { path: 'indices', component: IndicesComponent, data: { title: 'Indices' }, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
})
export class AppRoutingModule {}
