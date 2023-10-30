import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  searchResult: any =[
    "British Airways",
     "China Air",
    "Qatar"
  ]

  constructor() { }

  ngOnInit(): void { }

}
