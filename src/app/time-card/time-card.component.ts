import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.css'],
  providers: [

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],

})
export class TimeCardComponent implements OnInit {
  defaultDate = new Date();
  date = new FormControl(moment());

  numberForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.sum = 0;
    this.numberForm = this.fb.group({
      number: '',
      numbers: this.fb.array([]),
    });
  }

  numbers(): FormArray {
    return this.numberForm.get("numbers") as FormArray
  }

  newNumber(): FormGroup {
    return this.fb.group({
      phoneNumber: '',
    })
  }

  addNumber() {
    this.numbers().push(this.newNumber());
  }

  removeNumber(i: number) {
    this.numbers().removeAt(i);
  }

  onSubmit() {
    console.log(this.numberForm.value);

  }
  mon: string;
  tue: string;
  sum: number;
  calc() { this.sum = this.sum + parseInt(this.mon) + parseInt(this.tue); }

  ngOnInit(): void {
  }

}
