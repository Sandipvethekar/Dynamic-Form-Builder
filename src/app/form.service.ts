
import { Injectable } from '@angular/core';

export interface Field {
  type: string;
  label: string;
  placeholder?: string;
  options?: string[];
  value?: any;
  required?: boolean;
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {
  fields: any[] = [];

  getFields() {
    return this.fields;
  }

  addField(type: string) {
    const newField: any = {
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
      value: '',
      placeholder: `Enter ${type}`,
      required: true,
      name: `field${this.fields.length}`
    };

    if (type === 'dropdown' || type === 'radio') {
      newField.options = ['Option 1', 'Option 2', 'Option 3'];
    }

    this.fields.push(newField);
    return newField;
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
  }
}

