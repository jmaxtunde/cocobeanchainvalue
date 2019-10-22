import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.cocoanetwork{
   export class Address {
      country: string;
      city: string;
      street: string;
      phone: string;
   }
   export enum AssetStatus {
      RAW,
      PROCESSED,
      MANUFACTERED,
      CONSUMED,
   }
   export abstract class CocoaChainParticipant extends Participant {
      cocoaParticipantId: string;
      cocoaParticipantName: string;
      particpantAddress: Address;
   }
   export class Farmer extends CocoaChainParticipant {
   }
   export class LocalBuyer extends CocoaChainParticipant {
   }
   export class LicencedBuyer extends CocoaChainParticipant {
   }
   export class Exporter extends CocoaChainParticipant {
   }
   export class Processor extends CocoaChainParticipant {
   }
   export class Manufacturer extends CocoaChainParticipant {
   }
   export class Consumer extends CocoaChainParticipant {
   }
   export class Cocoa extends Asset {
      cocoaId: string;
      assetStatus: AssetStatus;
      quantity: number;
      priceFarmer: number;
      priceLocalBuyer: number;
      priceLicencedBuyer: number;
      priceProcessor: number;
      priceManufacturer: number;
      priceConsumer: number;
      cocoachainparticipant: CocoaChainParticipant;
   }
   export class RegisterCocoa extends Transaction {
      quantity: number;
      priceFarmer: number;
      assetStatus: AssetStatus;
      farmer: Farmer;
      cocoa: Cocoa;
   }
   export class SellToLocalBuyer extends Transaction {
      priceLocalBuyer: number;
      assetStatus: AssetStatus;
      localbuyer: LocalBuyer;
      cocoa: Cocoa;
   }
   export class SellToLicencedBuyer extends Transaction {
      priceLicencedBuyer: number;
      assetStatus: AssetStatus;
      licencedbuyer: LicencedBuyer;
      cocoa: Cocoa;
   }
   export class Exportation extends Transaction {
      exporter: Exporter;
      cocoa: Cocoa;
      assetStatus: AssetStatus;
   }
   export class SellToProcessor extends Transaction {
      priceProcessor: number;
      assetStatus: AssetStatus;
      processor: Processor;
      cocoa: Cocoa;
   }
   export class SellToManufacturer extends Transaction {
      priceManufacturer: number;
      assetStatus: AssetStatus;
      manufacturer: Manufacturer;
      cocoa: Cocoa;
   }
   export class SellToConsumer extends Transaction {
      priceConsumer: number;
      assetStatus: AssetStatus;
      consumer: Consumer;
      cocoa: Cocoa;
   }
   export class traceCocoa extends Transaction {
      cocoa: Cocoa;
   }
// }
