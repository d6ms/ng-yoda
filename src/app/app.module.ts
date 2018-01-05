import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { CorporateComponent } from './corporate/corporate.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'top', redirectTo: '', pathMatch: 'full' },
  { path: '', component: TopComponent },
  { path: 'corporate', component: CorporateComponent },
  { path: 'individuals', component: IndividualsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CorporateComponent,
    IndividualsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
