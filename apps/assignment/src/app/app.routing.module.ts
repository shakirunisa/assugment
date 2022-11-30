import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'libs/shared/src/lib/shared.module';
import { NxWelcomeComponentOne } from '../../../application-b/src/app/nx-welcome.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import {ShowimageComponent} from '../../../../libs/shared/src/lib/showimage/showimage.component'

const routes: Routes = [
{ path: '', component:HomeComponent },
 { path: 'applicationB', component: NxWelcomeComponentOne },
 {path:'sharedlibrary',component:ShowimageComponent}
 
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule,HomeModule,SharedModule],
providers: []
})
export class AppRoutingModule { }
