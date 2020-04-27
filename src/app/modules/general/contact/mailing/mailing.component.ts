import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent implements OnInit {

  exampleClasse = {
    name: 'Name Example'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
