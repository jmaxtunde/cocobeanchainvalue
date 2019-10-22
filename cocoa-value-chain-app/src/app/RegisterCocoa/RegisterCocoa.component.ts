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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterCocoaService } from './RegisterCocoa.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-registercocoa',
  templateUrl: './RegisterCocoa.component.html',
  styleUrls: ['./RegisterCocoa.component.css'],
  providers: [RegisterCocoaService]
})
export class RegisterCocoaComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  quantity = new FormControl('', Validators.required);
  priceFarmer = new FormControl('', Validators.required);
  assetStatus = new FormControl('', Validators.required);
  farmer = new FormControl('', Validators.required);
  cocoa = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private serviceRegisterCocoa: RegisterCocoaService, fb: FormBuilder) {
    this.myForm = fb.group({
      quantity: this.quantity,
      priceFarmer: this.priceFarmer,
      assetStatus: this.assetStatus,
      farmer: this.farmer,
      cocoa: this.cocoa,
      transactionId: this.transactionId,
      timestamp: this.timestamp
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceRegisterCocoa.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the transaction field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'org.cocoanetwork.RegisterCocoa',
      'quantity': this.quantity.value,
      'priceFarmer': this.priceFarmer.value,
      'assetStatus': this.assetStatus.value,
      'farmer': this.farmer.value,
      'cocoa': this.cocoa.value,
      'transactionId': this.transactionId.value,
      'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
      'quantity': null,
      'priceFarmer': null,
      'assetStatus': null,
      'farmer': null,
      'cocoa': null,
      'transactionId': null,
      'timestamp': null
    });

    return this.serviceRegisterCocoa.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'quantity': null,
        'priceFarmer': null,
        'assetStatus': null,
        'farmer': null,
        'cocoa': null,
        'transactionId': null,
        'timestamp': null
      });
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }

  updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'org.cocoanetwork.RegisterCocoa',
      'quantity': this.quantity.value,
      'priceFarmer': this.priceFarmer.value,
      'assetStatus': this.assetStatus.value,
      'farmer': this.farmer.value,
      'cocoa': this.cocoa.value,
      'timestamp': this.timestamp.value
    };

    return this.serviceRegisterCocoa.updateTransaction(form.get('transactionId').value, this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
      this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  deleteTransaction(): Promise<any> {

    return this.serviceRegisterCocoa.deleteTransaction(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceRegisterCocoa.getTransaction(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'quantity': null,
        'priceFarmer': null,
        'assetStatus': null,
        'farmer': null,
        'cocoa': null,
        'transactionId': null,
        'timestamp': null
      };

      if (result.quantity) {
        formObject.quantity = result.quantity;
      } else {
        formObject.quantity = null;
      }

      if (result.priceFarmer) {
        formObject.priceFarmer = result.priceFarmer;
      } else {
        formObject.priceFarmer = null;
      }

      if (result.assetStatus) {
        formObject.assetStatus = result.assetStatus;
      } else {
        formObject.assetStatus = null;
      }

      if (result.farmer) {
        formObject.farmer = result.farmer;
      } else {
        formObject.farmer = null;
      }

      if (result.cocoa) {
        formObject.cocoa = result.cocoa;
      } else {
        formObject.cocoa = null;
      }

      if (result.transactionId) {
        formObject.transactionId = result.transactionId;
      } else {
        formObject.transactionId = null;
      }

      if (result.timestamp) {
        formObject.timestamp = result.timestamp;
      } else {
        formObject.timestamp = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
      this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'quantity': null,
      'priceFarmer': null,
      'assetStatus': null,
      'farmer': null,
      'cocoa': null,
      'transactionId': null,
      'timestamp': null
    });
  }
}
