import {Component, Input, OnInit} from '@angular/core';
import {FaqModel} from '../../models/faq.model';

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss']
})
export class FaqCardComponent implements OnInit {

  @Input() public faq: FaqModel;

  constructor() { }

  ngOnInit(): void {
  }

}
