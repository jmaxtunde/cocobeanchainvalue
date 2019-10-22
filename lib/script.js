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

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Add cocoa 
 * @param  {org.cocoanetwork.RegisterCocoa} registerCocoa - the registration of cocoa transaction
 * @transaction
 */
function RegisterCocoa(registerCocoa) {
    return getAssetRegistry('org.cocoanetwork.Cocoa')
    .then(function (assetRegistry) {
      let factory = getFactory()
      let cocoaId = registerCocoa.cocoa.cocoaId + ''+registerCocoa.farmer.cocoaParticipantId
      let cocoaAsset = factory.newResource('org.cocoanetwork','Cocoa',cocoaId)
      cocoaAsset.assetStatus = registerCocoa.assetStatus
      cocoaAsset.quantity = registerCocoa.quantity
      cocoaAsset.priceFarmer = registerCocoa.priceFarmer
      cocoaAsset.cocoachainparticipant = registerCocoa.farmer
      cocoaAsset.cocoa =registerCocoa.cocoa
      return assetRegistry.add(cocoaAsset);
    })
    .catch(function (error) {
      console.log("Failed to register cocoa asset")
    });
}


/**
 * Sell to local buyer
 * @param  {org.cocoanetwork.SellToLocalBuyer} sellToLocalBuyer - the registration of cocoa transaction
 * @transaction
 */
function SellToLocalBuyer(sellToLocalBuyer) {
  let cocoaAsset;
  return getAssetRegistry('org.cocoanetwork.Cocoa')
  .then(function (selltolocalbuyerassetRegistry) {
    let factory = getFactory()
    cocoaAsset.assetStatus = sellToLocalBuyer.assetStatus
    cocoaAsset.priceLocalBuyer = sellToLocalBuyer.priceLocalBuyer
    cocoaAsset.cocoachainparticipant = sellToLocalBuyer.localbuyer
    cocoaAsset.cocoa =sellToLocalBuyer.cocoa
    return selltolocalbuyerassetRegistry.update(cocoaAsset);
  })
  .catch(function (error) {
    console.log("Failed to register transaction ")
  });
}

/**
 * Sell to licenced buyer
 * @param  {org.cocoanetwork.SellToLicencedBuyer} sellToLicencedBuyer - the registration of cocoa transaction
 * @transaction
 */
function SellToLocalBuyer(sellToLicencedBuyer) {
  let cocoaAsset;
  return getAssetRegistry('org.cocoanetwork.Cocoa')
  .then(function (selltoLicencedbuyerassetRegistry) {
    let factory = getFactory()
    cocoaAsset.assetStatus = sellToLicencedBuyer.assetStatus
    cocoaAsset.priceLicencedBuyer = sellToLicencedBuyer.priceLicencedBuyer
    cocoaAsset.cocoachainparticipant = sellToLicencedBuyer.licencedbuyer
    cocoaAsset.cocoa =sellToLicencedBuyer.cocoa
    return selltoLicencedbuyerassetRegistry.update(cocoaAsset);
  })
  .catch(function (error) {
    console.log("Failed to register transaction ")
  });
}

/**
 * Exportation
 * @param  {org.cocoanetwork.Exportation} exportation - the registration of cocoa transaction
 * @transaction
 */
function Exportation(exportation) {
  let cocoaAsset;
  return getAssetRegistry('org.cocoanetwork.Cocoa')
  .then(function (exportationassetRegistry) {
    let factory = getFactory()
    cocoaAsset.assetStatus = exportation.assetStatus
    cocoaAsset.cocoachainparticipant = exportation.exporter
    cocoaAsset.cocoa =exportation.cocoa
    return exportationassetRegistry.update(cocoaAsset);
  })
  .catch(function (error) {
    console.log("Failed to register transaction ")
  });
}

/**
 * Sell to processor
 * @param  {org.cocoanetwork.SellToProcessor} sellToProcessor - the registration of cocoa transaction
 * @transaction
 */
function SellToProcessor(sellToProcessor) {
  let cocoaAsset;
  return getAssetRegistry('org.cocoanetwork.Cocoa')
  .then(function (selltoprocessorassetRegistry) {
    let factory = getFactory()
    cocoaAsset.assetStatus = sellToProcessor.assetStatus
    cocoaAsset.priceLicencedBuyer = sellToProcessor.priceProcessor
    cocoaAsset.cocoachainparticipant = sellToProcessor.processor
    cocoaAsset.cocoa =sellToProcessor.cocoa
    return selltoprocessorassetRegistry.update(cocoaAsset);
  })
  .catch(function (error) {
    console.log("Failed to register transaction ")
  });
}

/**
 * Sell to manufacturer
 * @param  {org.cocoanetwork.SellToManufacturer} sellToManufacturer - the registration of cocoa transaction
 * @transaction
 */
function SellToManufacturer(sellToManufacturer) {
  let cocoaAsset;
  return getAssetRegistry('org.cocoanetwork.Cocoa')
  .then(function (selltomanufactuereassetRegistry) {
    let factory = getFactory()
    cocoaAsset.assetStatus = sellToManufacturer.assetStatus
    cocoaAsset.priceLicencedBuyer = sellToManufacturer.priceManufacturer
    cocoaAsset.cocoachainparticipant = sellToManufacturer.manufacturer
    cocoaAsset.cocoa =sellToManufacturer.cocoa
    return selltomanufactuereassetRegistry.update(cocoaAsset);
  })
  .catch(function (error) {
    console.log("Failed to register transaction ")
  });
}


/**
 * Sell to consumer
 * @param  {org.cocoanetwork.SellToConsumer} sellToConsumer - the registration of cocoa transaction
 * @transaction
 */
function SellToConsumer(sellToConsumer) {
  let cocoaAsset;
  return getAssetRegistry('org.cocoanetwork.Cocoa')
  .then(function (selltoconsumerassetRegistry) {
    let factory = getFactory()
    cocoaAsset.assetStatus = sellToConsumer.assetStatus
    cocoaAsset.priceLicencedBuyer = sellToConsumer.priceManufacturer
    cocoaAsset.cocoachainparticipant = sellToConsumer.manufacturer
    cocoaAsset.cocoa = sellToConsumer.cocoa
    return selltoconsumerassetRegistry.update(cocoaAsset);
  })
  .catch(function (error) {
    console.log("Failed to register transaction "+error)
  });
}

/**
 * Trace cocoa
 * @param  {org.cocoanetwork.TraceCocoa} traceCocoa - the registration of cocoa transaction
 * @transaction
 */
function TraceCocoa(traceCocoa) {
  let cocoa;

// Get the vehicle asset registry.
return getAssetRegistry('org.cocoanetwork.Cocoa')
  .then(function (CocoaAssetRegistry) {
    // Get the specific vehicle from the vehicle asset registry.
    cocoa = traceCocoa.cocoa
    return assetRegistry.get(cocoa);
  })
  .then(function (cocoa) {
    // Process the the vehicle object.
    console.log(cocoa.cocoaId);
    console.log(cocoa.assetStatus);
    console.log(cocoa.quantity);
    console.log(cocoa.priceFarmer);
    console.log(cocoa.priceLocalBuyer);
    console.log(cocoa.priceLicencedBuyer);
    console.log(cocoa.priceProcessor);
    console.log(cocoa.priceManufacturer);
    console.log(cocoa.priceConsumer);
    console.log(cocoa.cocoachainparticipant);
  })
  .catch(function (error) {
    // Add optional error handling here.
  });
}