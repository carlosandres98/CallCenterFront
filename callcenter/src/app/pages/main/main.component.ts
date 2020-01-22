import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ChatMock } from "../../models/chat.mock";
import { AllChats } from "../../models/chat.mock";

import { ChatResponseModel, TableList } from 'src/app/models/chat.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  chatReal: ChatResponseModel;
  tableList: TableList[] = [];

  constructor(public chatService: ChatService) { }


  ngOnInit() {

  }

  goEvaluation() {
    alert("YES");
    let count = 0
    while (count < AllChats.length) {
      this.chatService.getEvaluations(AllChats[count]).subscribe(
        (res: ChatResponseModel) => {
          let a: TableList = {check: res.isCheck, title: res.title, points: res.points, stars: this.calculateStars(res.points)};
          this.tableList.push(a);
          console.log(this.tableList[count]);
        }
      );
      count++;
    }
  }

  calculateStars (points: number) {
    if (points <= 0) {
      return 0;
    } 
    else if (points >= 0 && points <= 25) {
      return 1;
    }
    else if (points >= 25 && points <= 50) {
      return 2;
    }
    else if (points >= 50 && points <= 75) {
      return 3;
    }
    else if (points >= 75 && points <= 90) {
      return 4;
    }
    else if (points >= 90) {
      return 5;
    }
    else {
      return 0;
    }
  }

}
