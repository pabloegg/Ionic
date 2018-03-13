import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import {
  FormGroup,
  FormControl
} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  langs;
  langForm;

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
