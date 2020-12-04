import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  
  // Angular will inject the singleton MessageService into this property when it creates the MessagesComponent
  // Must be public because it needs to be binded to the template as Angular only binds to public compononent properties.
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
