import { AbstractControl } from '@angular/forms';

export function twoFieldMatch(field1: string, field2: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value[field1] === control.value[field2]
      ? null
      : { match: { val: true } };
  };
}
