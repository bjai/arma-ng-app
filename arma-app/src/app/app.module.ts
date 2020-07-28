import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderPaleteeComponent } from './header-paletee/header-paletee.component';
import { RealTimeMonitoringComponent } from './real-time-monitoring/real-time-monitoring.component';
import { InverterHeatMapComponent } from './inverter-heat-map/inverter-heat-map.component';
import { EventsPanelComponent } from './events-panel/events-panel.component';
import { ControlStatusComponent } from './control-status/control-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPaleteeComponent,
    RealTimeMonitoringComponent,
    InverterHeatMapComponent,
    EventsPanelComponent,
    ControlStatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    CalendarModule,
    FormsModule,
    InputSwitchModule,
    ScrollPanelModule,
    ButtonModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
