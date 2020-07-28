import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inverter-heat-map',
  templateUrl: './inverter-heat-map.component.html',
  styleUrls: ['./inverter-heat-map.component.scss']
})
export class InverterHeatMapComponent implements OnInit {
  items = [{
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-13',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-13',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-12',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  },
  {
    code: 'B-11',
    value: '24.00wh'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
