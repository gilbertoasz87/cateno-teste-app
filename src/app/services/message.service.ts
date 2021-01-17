import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Array<{type: string, text: string}> = [];

  add(message: string, type: string) {
    this.messages.push({
      type: type,
      text: message
    });
  }

  clear() {
    this.messages = [];
  }
}
