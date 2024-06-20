import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  @Input() field: any;
  @Input() form!: FormGroup;
  @Output() remove = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  get control() {
    return this.form.controls[this.field.name];
  }

  get isTouched() {
    return this.control?.touched;
  }

  get isValid() {
    return this.control?.valid;
  }

  removeField() {
    this.remove.emit();
  }
}
