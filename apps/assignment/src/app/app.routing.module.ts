import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NxWelcomeComponentOne } from '../../../application-b/src/app/nx-welcome.component';
//import { AboutComponent } from './about.component'
//mport { ContactComponent } from './contact.component'

const routes: Routes = [
{ path: '', component: HomeComponent },
 { path: 'applicationB', component: NxWelcomeComponentOne },
// { path: 'about', component: AboutComponent },
// { path: 'contact', component: ContactComponent, },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: []
})
export class AppRoutingModule { }
