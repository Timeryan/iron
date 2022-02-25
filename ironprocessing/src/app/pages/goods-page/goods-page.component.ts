import { Component, OnInit } from '@angular/core';
import {AdService} from '../../services/ad.service';
import {GoodModel} from '../../models/good.model';

@Component({
  selector: 'app-goods-page',
  templateUrl: './goods-page.component.html',
  styleUrls: ['./goods-page.component.scss']
})
export class GoodsPageComponent implements OnInit {

  public goods: GoodModel[];
  public isLoading = false;
  constructor(private goodService: AdService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.goodService.goods$.subscribe((res) => {
      this.goods = res;
      this.isLoading = true;
    });
  }
  onScroll(): void {
    this.goodService.updateAds();
  }
}
