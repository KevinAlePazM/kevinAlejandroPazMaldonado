import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdidasComponent } from './home/header/adidas/adidas.component';
import { AscicsComponent } from './home/header/ascics/ascics.component';
import { BrooksComponent } from './home/header/brooks/brooks.component';
import { HokaComponent } from './home/header/hoka/hoka.component';
import { NewbalanceComponent } from './home/header/newbalance/newbalance.component';
import { NikeComponent } from './home/header/nike/nike.component';
import { PumaComponent } from './home/header/puma/puma.component';
import { SalomonComponent } from './home/header/salomon/salomon.component';
import { UnderarmourComponent } from './home/header/underarmour/underarmour.component';
import { ZaprunhombreComponent } from './home/header/zaprunhombre/zaprunhombre.component';
import { HomeComponent } from './home/home.component';
import { InfozapBrooksGhost14Component } from './home/targetas/infozap-brooks-ghost14/infozap-brooks-ghost14.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path:'',
    component: LandingComponent,
    children:[
      {
          path:'home',
          component: HomeComponent
      },
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'salomon',
        component: SalomonComponent
      },
      {
        path: 'puma',
        component: PumaComponent
      },
      {
        path: 'underarmour',
        component: UnderarmourComponent
      },
      {
        path: 'adidas',
        component: AdidasComponent
      },
      {
        path: 'nike',
        component: NikeComponent
      },
      {
        path: 'newbalance',
        component: NewbalanceComponent
      },
      {
        path: 'ascics',
        component: AscicsComponent
      },
      {
        path: 'hoka',
        component: HokaComponent
      },
      {
        path: 'brooks',
        component: BrooksComponent
      },
      {
        path: 'zaprunhombre',
        component: ZaprunhombreComponent
      },
      {
        path: 'infozap-brooks-ghost14',
        component: InfozapBrooksGhost14Component
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
