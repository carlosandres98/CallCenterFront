import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})

export class StarsComponent implements OnInit {

  @Input() total: number;

  numberOfStars = [];
  constructor() { }

  ngOnInit() {
    let count = 0;
    console.log(this.total);
    
    while(count < this.total) {
      this.numberOfStars.push("star");
      count++;
    }
  }

}
