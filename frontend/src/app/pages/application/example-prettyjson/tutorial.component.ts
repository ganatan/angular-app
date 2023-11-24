
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
})
export class TutorialComponent implements OnInit {

  jsonMovie : any;

  ngOnInit(): void {
    this.jsonMovie =
    {
      "name": "Avengers: Endgame",
      "releaseDate": "26/04/2019",
      "franchise": true,
      "summary": "After the devastating",
      "boxoffice": {
        "budget": 356000000,
        "worldwide": 2797800564,
        "international": 1939427564,
        "domestic": 858373000
      }
    };

  }


}
