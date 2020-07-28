import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPaleteeComponent } from './header-paletee.component';

describe('HeaderPaleteeComponent', () => {
  let component: HeaderPaleteeComponent;
  let fixture: ComponentFixture<HeaderPaleteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPaleteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPaleteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
