import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './screens/auth/auth.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./screens/onboarding/onboarding.module').then((module) => module.OnboardingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./screens/auth/auth.module').then((module) => module.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
