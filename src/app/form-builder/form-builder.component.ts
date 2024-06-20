import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, public formBuilderService: FormService) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {

  }

  addField(type: string) {
    const newField = this.formBuilderService.addField(type);
    this.form.addControl(newField.name, this.fb.control(newField.value, newField.required ? Validators.required : null));
  }

  removeField(index: number) {
    const fieldName = this.formBuilderService.fields[index].name;
    this.formBuilderService.removeField(index);
    this.form.removeControl(fieldName);
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill all required fields.');
    }
  }

}
