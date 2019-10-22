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
import { ExporterService } from './Exporter.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-exporter',
  templateUrl: './Exporter.component.html',
  styleUrls: ['./Exporter.component.css'],
  providers: [ExporterService]
})
export class ExporterComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
  private errorMessage;

  cocoaParticipantId = new FormControl('', Validators.required);
  cocoaParticipantName = new FormControl('', Validators.required);
  particpantAddress = new FormControl('', Validators.required);


  constructor(public serviceExporter: ExporterService, fb: FormBuilder) {
    this.myForm = fb.group({
      cocoaParticipantId: this.cocoaParticipantId,
      cocoaParticipantName: this.cocoaParticipantName,
      particpantAddress: this.particpantAddress
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceExporter.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
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
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org.cocoanetwork.Exporter',
      'cocoaParticipantId': this.cocoaParticipantId.value,
      'cocoaParticipantName': this.cocoaParticipantName.value,
      'particpantAddress': this.particpantAddress.value
    };

    this.myForm.setValue({
      'cocoaParticipantId': null,
      'cocoaParticipantName': null,
      'particpantAddress': null
    });

    return this.serviceExporter.addParticipant(this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'cocoaParticipantId': null,
        'cocoaParticipantName': null,
        'particpantAddress': null
      });
      this.loadAll(); 
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org.cocoanetwork.Exporter',
      'cocoaParticipantName': this.cocoaParticipantName.value,
      'particpantAddress': this.particpantAddress.value
    };

    return this.serviceExporter.updateParticipant(form.get('cocoaParticipantId').value, this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
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


  deleteParticipant(): Promise<any> {

    return this.serviceExporter.deleteParticipant(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
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

    return this.serviceExporter.getparticipant(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'cocoaParticipantId': null,
        'cocoaParticipantName': null,
        'particpantAddress': null
      };

      if (result.cocoaParticipantId) {
        formObject.cocoaParticipantId = result.cocoaParticipantId;
      } else {
        formObject.cocoaParticipantId = null;
      }

      if (result.cocoaParticipantName) {
        formObject.cocoaParticipantName = result.cocoaParticipantName;
      } else {
        formObject.cocoaParticipantName = null;
      }

      if (result.particpantAddress) {
        formObject.particpantAddress = result.particpantAddress;
      } else {
        formObject.particpantAddress = null;
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
      'cocoaParticipantId': null,
      'cocoaParticipantName': null,
      'particpantAddress': null
    });
  }
}
