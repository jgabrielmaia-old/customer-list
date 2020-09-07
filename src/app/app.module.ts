import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Telephone, CartCheck, Calendar2CheckFill, GeoAltFill } from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { CustomerDataFormComponent } from './components/customer-data-form/customer-data-form.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { CustomerService } from 'src/core/services/customer/customer.service';
import { SearchParamsService } from 'src/core/services/search-params/search-params.service';

registerLocaleData(localePt);

const icons = {
  Telephone,
  CartCheck,
  Calendar2CheckFill,
  GeoAltFill
};


@NgModule({
  declarations: [
    AppComponent,
    CustomerDataFormComponent,
    CustomerCardComponent,
    CustomerListComponent,
    NotFoundComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [
    CustomerService,
    SearchParamsService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
