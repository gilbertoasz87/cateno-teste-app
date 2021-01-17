import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ng_version = VERSION.full;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.clear();
  }

}
