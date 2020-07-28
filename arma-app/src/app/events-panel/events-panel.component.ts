import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-panel',
  templateUrl: './events-panel.component.html',
  styleUrls: ['./events-panel.component.scss']
})
export class EventsPanelComponent implements OnInit {
  cols = [
    { field: 'timestamp', header: 'TimeStamp' },
    { field: 'priority', header: 'Priority' },
    { field: 'device', header: 'Device' },
    { field: 'operated', header: 'Operated By' },
    { field: 'evenDescription', header: 'Event Description' }

  ];
  cars = [
    { timestamp: 'a1653d4d', device: 'VW', priority: 1998, operated: 'White', evenDescription: 10000 },
    { timestamp: 'ddeb9b10', device: 'Mercedes', priority: 1985, operated: 'Green', evenDescription: 25000 },
    { timestamp: 'd8ebe413', device: 'Jaguar', priority: 1979, operated: 'Silver', evenDescription: 30000 },
    { timestamp: 'aab227b7', device: 'Audi', priority: 1970, operated: 'Black', evenDescription: 12000 },
    { timestamp: '631f7412', device: 'Volvo', priority: 1992, operated: 'Red', evenDescription: 15500 },
    { timestamp: '7d2d22b0', device: 'VW', priority: 1993, operated: 'Maroon', evenDescription: 40000 },
    { timestamp: '50e900ca', device: 'Fiat', priority: 1964, operated: 'Blue', evenDescription: 25000 },
    { timestamp: '4bbcd603', device: 'Renault', priority: 1983, operated: 'Maroon', evenDescription: 22000 },
    { timestamp: '70214c7e', device: 'Renault', priority: 1961, operated: 'Black', evenDescription: 19000 },
    { timestamp: 'ec229a92', device: 'Audi', priority: 1984, operated: 'Brown', evenDescription: 36000 },
    { timestamp: '1083ee40', device: 'VW', priority: 1984, operated: 'Silver', evenDescription: 215000 },
    { timestamp: '6e0da3ab', device: 'Volvo', priority: 1987, operated: 'Silver', evenDescription: 32000 },
    { timestamp: '5aee636b', device: 'Jaguar', priority: 1995, operated: 'Maroon', evenDescription: 20000 },
    { timestamp: '7cc43997', device: 'Jaguar', priority: 1984, operated: 'Orange', evenDescription: 14000 },
    { timestamp: '88ec9f66', device: 'Honda', priority: 1989, operated: 'Maroon', evenDescription: 36000 },
    { timestamp: 'f5a4a5f5', device: 'BMW', priority: 1986, operated: 'Blue', evenDescription: 28000 },
    { timestamp: '15b9a5c9', device: 'Mercedes', priority: 1986, operated: 'Orange', evenDescription: 14000 },
    { timestamp: 'f7e18d01', device: 'Mercedes', priority: 1991, operated: 'White', evenDescription: 25000 },
    { timestamp: 'cec593d7', device: 'VW', priority: 1992, operated: 'Blue', evenDescription: 36000 },
    { timestamp: 'd5bac4f0', device: 'Renault', priority: 2001, operated: 'Blue', evenDescription: 25000 },
    { timestamp: '56b527c8', device: 'Jaguar', priority: 1990, operated: 'Yellow', evenDescription: 52000 },
    { timestamp: '1ac011ff', device: 'Audi', priority: 1966, operated: 'Maroon', evenDescription: 45000 },
    { timestamp: 'fc074185', device: 'BMW', priority: 1962, operated: 'Blue', evenDescription: 54000 },
    { timestamp: '606ba663', device: 'Honda', priority: 1982, operated: 'Blue', evenDescription: 22000 },
    { timestamp: 'd05060b8', device: 'Mercedes', priority: 2003, operated: 'Silver', evenDescription: 15000 },
    { timestamp: '46e4bbe8', device: 'Mercedes', priority: 1986, operated: 'White', evenDescription: 18000 },
    { timestamp: 'c29da0d7', device: 'BMW', priority: 1983, operated: 'Brown', evenDescription: 32000 },
    { timestamp: '24622f70', device: 'VW', priority: 1973, operated: 'Maroon', evenDescription: 36000 },
    { timestamp: '7f573d2c', device: 'Mercedes', priority: 1991, operated: 'Red', evenDescription: 21000 },
    { timestamp: 'b69e6f5c', device: 'Jaguar', priority: 1993, operated: 'Yellow', evenDescription: 16000 },
    { timestamp: 'ead9bf1d', device: 'Fiat', priority: 1968, operated: 'Maroon', evenDescription: 43000 },
    { timestamp: 'bc58113e', device: 'Renault', priority: 1981, operated: 'Silver', evenDescription: 36000 },
    { timestamp: '2989d5b1', device: 'Honda', priority: 2006, operated: 'Blue', evenDescription: 240000 },
    { timestamp: 'c243e3a0', device: 'Fiat', priority: 1990, operated: 'Maroon', evenDescription: 15000 },
    { timestamp: 'e3d3ebf3', device: 'Audi', priority: 1996, operated: 'White', evenDescription: 28000 },
    { timestamp: '45337e7a', device: 'Mercedes', priority: 1982, operated: 'Blue', evenDescription: 14000 },
    { timestamp: '36e9cf7e', device: 'Fiat', priority: 2000, operated: 'Orange', evenDescription: 26000 },
    { timestamp: '036bf135', device: 'Mercedes', priority: 1973, operated: 'Black', evenDescription: 22000 },
    { timestamp: 'ad612e9f', device: 'Mercedes', priority: 1975, operated: 'Red', evenDescription: 45000 },
    { timestamp: '97c6e1e9', device: 'Volvo', priority: 1967, operated: 'Green', evenDescription: 42000 },
    { timestamp: 'ae962274', device: 'Volvo', priority: 1982, operated: 'Red', evenDescription: 36000 },
    { timestamp: '81f8972a', device: 'BMW', priority: 2007, operated: 'Black', evenDescription: 56000 },
    { timestamp: 'f8506743', device: 'Audi', priority: 1975, operated: 'Blue', evenDescription: 42000 },
    { timestamp: '596859d1', device: 'Fiat', priority: 2002, operated: 'Green', evenDescription: 48000 },
    { timestamp: 'd83c1d9a', device: 'Volvo', priority: 1972, operated: 'Black', evenDescription: 29000 },
    { timestamp: '32f41550', device: 'Mercedes', priority: 1978, operated: 'Brown', evenDescription: 17000 },
    { timestamp: 'c28cd2e4', device: 'Volvo', priority: 1982, operated: 'Silver', evenDescription: 24000 },
    { timestamp: '80890dcc', device: 'Audi', priority: 1962, operated: 'White', evenDescription: 36000 },
    { timestamp: '4bf1aeb5', device: 'VW', priority: 2000, operated: 'Silver', evenDescription: 24000 },
    { timestamp: '45ca4786', device: 'BMW', priority: 1995, operated: 'Maroon', evenDescription: 50000 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
