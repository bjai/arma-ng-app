import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-status',
  templateUrl: './control-status.component.html',
  styleUrls: ['./control-status.component.scss']
})
export class ControlStatusComponent implements OnInit {

  cols = [
    { field: 'status', header: 'Status' },
    { field: 'priority', header: 'Priority' },
    { field: 'device', header: 'Device' },
    { field: 'setPoint', header: 'Set Point' }

  ];
  cars = [
    { status: true, device: 'VW', priority: 1998, operated: 'White', setPoint: 10000 },
    { status: false, device: 'Mercedes', priority: 1985, operated: 'Green', setPoint: 25000 },
    { status: true, device: 'Jaguar', priority: 1979, operated: 'Silver', setPoint: 30000 },
    { status: true, device: 'Audi', priority: 1970, operated: 'Black', setPoint: 12000 },
    { status: false, device: 'Volvo', priority: 1992, operated: 'Red', setPoint: 15500 },
    { status: true, device: 'VW', priority: 1993, operated: 'Maroon', setPoint: 40000 },
    { status: false, device: 'Fiat', priority: 1964, operated: 'Blue', setPoint: 25000 },
    { status: false, device: 'Renault', priority: 1983, operated: 'Maroon', setPoint: 220 }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
