import { Injectable } from '@angular/core';
import { ChatModel, ChatResponseModel } from '../models/chat.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatMock } from '../models/chat.mock';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  response: ChatResponseModel;
  constructor(public http: HttpClient) { }

  getEvaluations (chat: ChatModel) { 
    let response = this.http.post("https://localhost:44329/api/chat", chat);
    return response;
  }
}
 