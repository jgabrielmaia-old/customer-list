import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerRegisterComponent } from './pages/customer-register/customer-register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: CustomerListComponent},
  { path: 'cadastro', component: CustomerRegisterComponent},
  { path: 'editar/:id', component: CustomerEditComponent},
  { path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }