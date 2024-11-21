import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegustrationComponent } from './components/regustration/regustration.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginpageComponent
  },
  {
    path: 'Registration',
    component: RegustrationComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
