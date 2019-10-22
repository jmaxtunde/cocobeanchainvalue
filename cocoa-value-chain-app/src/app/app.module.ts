/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CocoaComponent } from './Cocoa/Cocoa.component';

import { FarmerComponent } from './Farmer/Farmer.component';
import { LocalBuyerComponent } from './LocalBuyer/LocalBuyer.component';
import { LicencedBuyerComponent } from './LicencedBuyer/LicencedBuyer.component';
import { ExporterComponent } from './Exporter/Exporter.component';
import { ProcessorComponent } from './Processor/Processor.component';
import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
import { ConsumerComponent } from './Consumer/Consumer.component';

import { RegisterCocoaComponent } from './RegisterCocoa/RegisterCocoa.component';
import { SellToLocalBuyerComponent } from './SellToLocalBuyer/SellToLocalBuyer.component';
import { SellToLicencedBuyerComponent } from './SellToLicencedBuyer/SellToLicencedBuyer.component';
import { ExportationComponent } from './Exportation/Exportation.component';
import { SellToProcessorComponent } from './SellToProcessor/SellToProcessor.component';
import { SellToManufacturerComponent } from './SellToManufacturer/SellToManufacturer.component';
import { SellToConsumerComponent } from './SellToConsumer/SellToConsumer.component';
import { traceCocoaComponent } from './traceCocoa/traceCocoa.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CocoaComponent,
    FarmerComponent,
    LocalBuyerComponent,
    LicencedBuyerComponent,
    ExporterComponent,
    ProcessorComponent,
    ManufacturerComponent,
    ConsumerComponent,
    RegisterCocoaComponent,
    SellToLocalBuyerComponent,
    SellToLicencedBuyerComponent,
    ExportationComponent,
    SellToProcessorComponent,
    SellToManufacturerComponent,
    SellToConsumerComponent,
    traceCocoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
