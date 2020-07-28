import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header-paletee',
  templateUrl: './header-paletee.component.html',
  styleUrls: ['./header-paletee.component.scss']
})
export class HeaderPaleteeComponent implements OnInit {

  dateTime = new Date();

  dateValue = new Date();
  checked1 = true;
  checked2 = false;
  checked3 = true;
  checked4 = false;
  checked5 = true;
  cb1 = true;
  cb2 = false;
  cb3 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
