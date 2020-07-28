import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-time-monitoring',
  templateUrl: './real-time-monitoring.component.html',
  styleUrls: ['./real-time-monitoring.component.scss']
})
export class RealTimeMonitoringComponent implements OnInit {

  data = {
    labels: ['155.36', '135.85', '120.56', '193.56', '985.63', '75.63', '758.33'],
    datasets: [
      {
        label: 'P set',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#4bc0c0'
      },
      {
        label: 'Q set',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#565656'
      },
      {
        label: 'Y set',
        data: [58, 78, 60, 19, 86, 87, 0],
        fill: false,
        borderColor: '#E29E9A'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
