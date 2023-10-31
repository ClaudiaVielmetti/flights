import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { FlightService } from './../api/services/flight.service';
import { FlightRm } from './../api/models';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  searchResult: FlightRm[] = []


  constructor(private flightService: FlightService) { }

  ngOnInit(): void { }

  search() {
    this.flightService.flightGet({}).subscribe({
      next: (response: any) => (this.searchResult = response),
      error: this.handleError,
    });
  }

  private handleError(err: any) {
    console.log(err)
  }
}


