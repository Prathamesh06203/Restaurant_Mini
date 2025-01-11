import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './screens/onboarding/detail-form/detail-form.component';
import { ListRestoComponent } from './screens/list-resto/list-resto/list-resto.component';

const routes: Routes = [
  {
    path: 'onboarding',
    component: DetailFormComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'list-resto',
    component: ListRestoComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
