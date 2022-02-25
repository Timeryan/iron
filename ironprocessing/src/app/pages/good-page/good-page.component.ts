import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdService} from '../../services/ad.service';
import {GoodModel} from '../../models/good.model';

@Component({
  selector: 'app-good-page',
  templateUrl: './good-page.component.html',
  styleUrls: ['./good-page.component.scss']
})
export class GoodPageComponent implements OnInit {

  public good: any;
  isLoading = false;

  constructor(private goodService: AdService,
              private activatedRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.goodService.GetById(parseInt(this.activatedRoute.snapshot.params.id, 10)).subscribe(
      (res) => {
        this.good = res;
        this.isLoading = true;
      }
    );
  }
}
