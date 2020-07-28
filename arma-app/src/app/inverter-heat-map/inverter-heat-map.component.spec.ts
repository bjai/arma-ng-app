import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InverterHeatMapComponent } from './inverter-heat-map.component';

describe('InverterHeatMapComponent', () => {
  let component: InverterHeatMapComponent;
  let fixture: ComponentFixture<InverterHeatMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InverterHeatMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InverterHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
