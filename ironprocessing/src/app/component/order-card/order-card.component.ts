import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {

  constructor() { }
  @Input() order: any;

  ngOnInit(): void {
    this.order.advertisement.photo = this.order.advertisement.photos[0];
  }

}
