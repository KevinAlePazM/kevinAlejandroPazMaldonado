import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './landing/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(mod => mod.LandingModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  /*
  {
    path:'zaprunhombre',
    component: ZaprunhombreComponent
  },
  {
    path:'zapfithombre',
    component: ZapfithombreComponent
  },
  {
    path:'zapsnehombre',
    component: ZapsnehombreComponent
  },
  {
    path:'zaptrahombre',
    component: ZaptrahombreComponent
  },
  {
    path:'zapcroshombre',
    component: ZapcroshombreComponent
  },
  {
    path:'zaptrehombre',
    component: ZaptrehombreComponent
  },
  {
    path:'zaprunmujer',
    component: ZaprunmujerComponent
  },
  {
    path:'zapfitmujer',
    component: ZapfitmujerComponent
  },
  {
    path:'zapsnemujer',
    component: ZapsnemujerComponent
  },
  {
    path:'zaptramujer',
    component: ZaptramujerComponent
  },
  {
    path:'zapcrosmujer',
    component: ZapcrosmujerComponent
  },
  {
    path:'zaptremujer',
    component: ZaptremujerComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
