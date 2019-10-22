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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Cocoa', component: CocoaComponent },
  { path: 'Farmer', component: FarmerComponent },
  { path: 'LocalBuyer', component: LocalBuyerComponent },
  { path: 'LicencedBuyer', component: LicencedBuyerComponent },
  { path: 'Exporter', component: ExporterComponent },
  { path: 'Processor', component: ProcessorComponent },
  { path: 'Manufacturer', component: ManufacturerComponent },
  { path: 'Consumer', component: ConsumerComponent },
  { path: 'RegisterCocoa', component: RegisterCocoaComponent },
  { path: 'SellToLocalBuyer', component: SellToLocalBuyerComponent },
  { path: 'SellToLicencedBuyer', component: SellToLicencedBuyerComponent },
  { path: 'Exportation', component: ExportationComponent },
  { path: 'SellToProcessor', component: SellToProcessorComponent },
  { path: 'SellToManufacturer', component: SellToManufacturerComponent },
  { path: 'SellToConsumer', component: SellToConsumerComponent },
  { path: 'traceCocoa', component: traceCocoaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
