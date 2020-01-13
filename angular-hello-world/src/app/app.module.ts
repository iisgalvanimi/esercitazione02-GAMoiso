import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularHelloWorldComponent } from './angular-hello-world/angular-hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularHelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
