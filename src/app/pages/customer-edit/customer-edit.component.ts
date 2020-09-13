import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerData } from 'src/app/model/customer-data';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerData$: Observable<CustomerData>;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.customerData$ = this.customerService.get(id);
  }

  updateSubmit(updatedCustomer: CustomerData){
    this.customerService.update(updatedCustomer).subscribe();
    this.router.navigate(['/']);
  }

}
