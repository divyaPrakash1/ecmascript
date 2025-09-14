import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../utils/custom-validator/custom-validator';

@Component({
  selector: 'ecmspt-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})

export class FormComponentComponent implements OnInit, OnDestroy {


  playersDetails!: FormGroup;

  constructor(private _fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.playersDetails = this._fb.group({
      name: ['', [Validators.required, CustomValidators.onlyAlphabet()]], // only alphabet
      age: ['', [Validators.required, CustomValidators.ageBetween(17, 41)]], // 18 <= age <= 40
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]], // only number Allowed that starts with 6-9 and 10 digits
      address: this._fb.group({
        housenumber: ['', [Validators.required, CustomValidators.numberShouldBeGivenDigits(2)]], // only two digits number allowed
        city: ['', [Validators.required, CustomValidators.onlyAlphabet()]],// only alphabet
        landmark: ['', [Validators.required]], // Can be anything but required
        pincode: ['', [Validators.required, CustomValidators.onlyNumbersAllowed(), CustomValidators.numberShouldBeGivenDigits(6)]], // only number Allowed 6 digits only
      }),
      stadiumdetails: this._fb.array([
        this.newStadiumDetails()
      ])
    })
  }


  newStadiumDetails(): FormGroup {
    return this._fb.group({
      stadiumname: ['', [Validators.required, CustomValidators.onlyAlphabet()]], // only alphabet
      stadiumcapacity: ['', [Validators.required, CustomValidators.onlyNumbersAllowed()]], // only number
      stadiumcity: ['', [Validators.required, CustomValidators.onlyAlphabet()]], // only alphabet
    });
  }

  get sd(): FormArray {
    return this.playersDetails.get('stadiumdetails') as FormArray;
  }

  get f() {
    return this.playersDetails.controls;
  }

  get a(): FormGroup {
    return this.playersDetails.get('address') as FormGroup
  }

  addStadiumDetails() {
    this.sd.push(this.newStadiumDetails());
  }

  removeStadiumDetails(index: number) {
    this.sd.removeAt(index);
  }

  submitPlayerDetails() {
    if (this.playersDetails.invalid) {
      this.playersDetails.markAllAsTouched();
    } else {
      console.log(this.playersDetails.value);
    }
  }


  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

}
