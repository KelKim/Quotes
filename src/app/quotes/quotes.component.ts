import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes = [
      new Quotes(1,'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for', 'Bob Marley'),
      new Quotes(2,'Outside the kingdom of the Lord there is no nation which is greater than any other. God and history will remember your judgment.','Haile Selassie'),
      new Quotes(3, 'If you have no confidence in self, you are twice defeated in the race of life', 'Marcus Garvey'),
    ]
    
    toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;           
    }
  constructor() { }

  ngOnInit() {
  }
}