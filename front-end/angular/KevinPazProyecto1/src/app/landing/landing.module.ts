import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { TargetasComponent } from './home/targetas/targetas.component';
import { BodyComponent } from './home/body/body.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { ModelsComponent } from './home/header/models/models.component';
import { MenuComponent } from './home/header/menu/menu.component';
import { DesplazarComponent } from './home/desplazar/desplazar.component';
import { InisesionComponent } from './home/header/inisesion/inisesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LandingComponent } from './landing.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { AngularFireAuthModule } from "@angular/fire/auth";

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    DesplazarComponent,
    HeaderComponent,
    MenuComponent,
    ModelsComponent,
    InisesionComponent,
    FooterComponent,
    BodyComponent,
    PaginacionComponent,
    TargetasComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment),
    //firebaseConfig), 
    AngularFireAuthModule,
    SweetAlert2Module.forRoot(),
    FormsModule
  ],
  providers: [
    AuthService
  ]
})
export class LandingModule { }
