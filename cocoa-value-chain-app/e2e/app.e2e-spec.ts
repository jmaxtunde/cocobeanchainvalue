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

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for cocoa-value-chain-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be cocoa-value-chain-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('cocoa-value-chain-app');
    })
  });

  it('network-name should be cocoa-value-chain-network@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('cocoa-value-chain-network@0.0.1.bna');
    });
  });

  it('navbar-brand should be cocoa-value-chain-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('cocoa-value-chain-app');
    });
  });

  
    it('Cocoa component should be loadable',() => {
      page.navigateTo('/Cocoa');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Cocoa');
      });
    });

    it('Cocoa table should have 11 columns',() => {
      page.navigateTo('/Cocoa');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(11); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Farmer component should be loadable',() => {
      page.navigateTo('/Farmer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Farmer');
      });
    });

    it('Farmer table should have 4 columns',() => {
      page.navigateTo('/Farmer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('LocalBuyer component should be loadable',() => {
      page.navigateTo('/LocalBuyer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LocalBuyer');
      });
    });

    it('LocalBuyer table should have 4 columns',() => {
      page.navigateTo('/LocalBuyer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('LicencedBuyer component should be loadable',() => {
      page.navigateTo('/LicencedBuyer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LicencedBuyer');
      });
    });

    it('LicencedBuyer table should have 4 columns',() => {
      page.navigateTo('/LicencedBuyer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Exporter component should be loadable',() => {
      page.navigateTo('/Exporter');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Exporter');
      });
    });

    it('Exporter table should have 4 columns',() => {
      page.navigateTo('/Exporter');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Processor component should be loadable',() => {
      page.navigateTo('/Processor');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Processor');
      });
    });

    it('Processor table should have 4 columns',() => {
      page.navigateTo('/Processor');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Manufacturer component should be loadable',() => {
      page.navigateTo('/Manufacturer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Manufacturer');
      });
    });

    it('Manufacturer table should have 4 columns',() => {
      page.navigateTo('/Manufacturer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Consumer component should be loadable',() => {
      page.navigateTo('/Consumer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Consumer');
      });
    });

    it('Consumer table should have 4 columns',() => {
      page.navigateTo('/Consumer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('RegisterCocoa component should be loadable',() => {
      page.navigateTo('/RegisterCocoa');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RegisterCocoa');
      });
    });
  
    it('SellToLocalBuyer component should be loadable',() => {
      page.navigateTo('/SellToLocalBuyer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SellToLocalBuyer');
      });
    });
  
    it('SellToLicencedBuyer component should be loadable',() => {
      page.navigateTo('/SellToLicencedBuyer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SellToLicencedBuyer');
      });
    });
  
    it('Exportation component should be loadable',() => {
      page.navigateTo('/Exportation');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Exportation');
      });
    });
  
    it('SellToProcessor component should be loadable',() => {
      page.navigateTo('/SellToProcessor');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SellToProcessor');
      });
    });
  
    it('SellToManufacturer component should be loadable',() => {
      page.navigateTo('/SellToManufacturer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SellToManufacturer');
      });
    });
  
    it('SellToConsumer component should be loadable',() => {
      page.navigateTo('/SellToConsumer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SellToConsumer');
      });
    });
  
    it('traceCocoa component should be loadable',() => {
      page.navigateTo('/traceCocoa');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('traceCocoa');
      });
    });
  

});