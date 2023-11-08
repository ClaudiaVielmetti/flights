import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { FlightService } from './../api/services/flight.service';
import { FlightRm } from './../api/models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  searchResult: FlightRm[] = []


  constructor(private flightService: FlightService,
    private fb: FormBuilder) { }

  SearchForm = this.fb.group({
    from: [''],
    destination: [''],
    fromDate: [''],
    toDate: [''],
    numberOfPassengers: [1]
  })

  ngOnInit(): void { }

  search() {
    this.flightService.searchFlight(this.SearchForm.value as any).subscribe({
      next: (response: any) => (this.searchResult = response),
      error: this.handleError,
    });
  }

  private handleError(err: any) {
    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }
}


