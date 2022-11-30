import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app.routing.module';
import { SharedModuleSample } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,MatSidenavModule,BrowserAnimationsModule,AppRoutingModule,SharedModuleSample],
  exports:[MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
