import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './screens/auth/auth.module';
import { RestaurantDetailsComponent } from './screens/onboarding/restaurant-details/restaurant-details.component';
import { FrontComponent } from './screens/front/front.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent
  },
  {
    path: 'restaurant-details',
    component: RestaurantDetailsComponent
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
