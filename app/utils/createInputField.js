import React from 'react';
import {
  FormField,
  FormInput,
} from 'elemental';

export default function createInputField({ label, type, placeholder } = {
  label: '',
  type: '',
  placeholder: '',
}) {
  return (field) => (
    <FormField label={label}>
      <FormInput type={type} {...field} placeholder={placeholder} />
      {field.touched && field.error && <span>{field.error}</span>}
    </FormField>
  );
}
