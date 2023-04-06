import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildtoparentComponent,
    ParenttochildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
