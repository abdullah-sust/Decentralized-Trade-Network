import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for dtn-angular-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be dtn-angular-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('dtn-angular-app');
    })
  });

  it('network-name should be decentralized-trade-network@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('decentralized-trade-network@0.0.1.bna');
    });
  });

  it('navbar-brand should be dtn-angular-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('dtn-angular-app');
    });
  });

  
    it('Product component should be loadable',() => {
      page.navigateTo('/Product');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Product');
      });
    });

    it('Product table should have 7 columns',() => {
      page.navigateTo('/Product');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Person component should be loadable',() => {
      page.navigateTo('/Person');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Person');
      });
    });

    it('Person table should have 6 columns',() => {
      page.navigateTo('/Person');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('productTransfer component should be loadable',() => {
      page.navigateTo('/productTransfer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('productTransfer');
      });
    });
  

});