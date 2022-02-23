import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  goods: { id: number, name?: string, imgPath: string }[];

  constructor() {
  }

  ngOnInit(): void {
      this.goods = [
        { id : 1, imgPath: 'assets/image/temp/6.png'},
        { id : 2, imgPath: 'assets/image/temp/7.png'},
        { id : 3, imgPath: 'assets/image/temp/8.png'},
        { id : 4, imgPath: 'assets/image/temp/9.png'},
        { id : 4, imgPath: 'assets/image/temp/10.png'},
        { id : 1, imgPath: 'assets/image/temp/6.png'},
        { id : 2, imgPath: 'assets/image/temp/7.png'},
        { id : 3, imgPath: 'assets/image/temp/8.png'},
        { id : 4, imgPath: 'assets/image/temp/9.png'},
        { id : 4, imgPath: 'assets/image/temp/10.png'},
        { id : 1, imgPath: 'assets/image/temp/6.png'},
        { id : 2, imgPath: 'assets/image/temp/7.png'},
      ];
  }
}
