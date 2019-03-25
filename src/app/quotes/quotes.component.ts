import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes=[
  new Quote ("","","Our greatest glory is not in never falling but in rising every time we fall.",),
  new Quote ("","","All our dreams can come true if we have the courage to pursue them."),
  new Quote ("","","It does not matter how slowly you goa s long as you do not stop."),
  new Quote ("","","Everything you've ever wanted is on the other side of fear."),
]
  constructor() { }

  ngOnInit() {
  }

}
