import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {GoodModel} from '../../models/good.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AdService} from '../../services/ad.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-individual-page',
  templateUrl: './individual-page.component.html',
  styleUrls: ['./individual-page.component.scss']
})
export class IndividualPageComponent implements OnInit {

  public formGroupOrder: FormGroup;
  public good: any;
  public isLoading = false;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private goodService: AdService,
              private orderService: OrderService,
              private route: Router) { }

  ngOnInit(): void {
    this.formGroupOrder = this.formBuilder.group({
      fullName: [''],
      discription: [''],
      phone: [''],
      advertisementId: ['']
    });
    if (parseInt(this.activatedRoute.snapshot.params.id, 10) !== 0){
      this.goodService.GetById(parseInt(this.activatedRoute.snapshot.params.id, 10)).subscribe(
        (res) => {this.good = res; this.good.photo = this.good.photos[0]; this.isLoading = true}
      );
    }else {
      this.isLoading = true;
    }
  }
  public createOrder(): void{
    this.formGroupOrder.controls.advertisementId
      .setValue(parseInt(this.activatedRoute.snapshot.params.id, 10) === 0 ? null : this.activatedRoute.snapshot.params.id);
    this.orderService.createOrder(this.formGroupOrder.getRawValue()).subscribe();
    this.route.navigate(['/goods']);
  }
}
