import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user;
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      login: 'in',
      user: {
        name: '',
        pwd: ''
      }
    });
  }

  ngOnInit() {
  }

}
