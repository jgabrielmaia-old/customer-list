import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDataFormComponent } from './components/customer-data-form/customer-data-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: CustomerListComponent},
  { path: 'cadastro', component: CustomerDataFormComponent},
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }