import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validate'
})
export class ValidatePipe implements PipeTransform {

  transform(errors: any | null, fieldName: string = 'Field'): string {
    // console.log(control.errors);
    // Custom Error messages
    if (!errors || typeof errors !== 'object') {
      return '';
    }
    if (errors.custom) {
      return errors.custom;
    }

    // Mask Error
    if (errors['Mask error']) {
      return `${fieldName} is not valid.`;
    }

    if (errors.mismatch) {
      return `passwords do not match`;
    }
    // Pattern Error
    // if (control.hasError('pattern')) {
    //   return `${fieldName} ${PATTERN_REGEX.message(control.errors.pattern.requiredPattern)}`;
    // }

    // Required Error
    if (errors.required) {
      return `${fieldName} is required.`;
    }

    if (errors.pattern) {
      return `${fieldName} is not valid.`;
    }
    // Email Error
    if (errors.email) {
      return `${fieldName} is not valid.`;
    }

    // Number Error
    if (errors.number) {
      return `${fieldName} is not a valid number.`;
    }

    // Min Length Error
    if (errors.minlength) {
      return `${fieldName} length should be at least ${errors.minlength.requiredLength}`;
    }

    // Max Length Error
    if (errors.maxlength) {
      return `${fieldName} length should be less than ${errors.maxlength.requiredLength}`;
    }

    // Min Error
    if (errors.min) {
      return `${fieldName} should be equal or greater than ${errors.min.min}`;
    }

    // Max Error
    if (errors.max) {
      return `${fieldName} should be equal or less than ${errors.max.max}`;
    }


    // Confirm Password match
    // console.log(control.errors);
    if (errors.compare) {
      let message = null;
      const error = errors.compare;
      switch (error.type) {
        case 'MATCH': {
          message = `${fieldName} do not match with ${error.field}`;
          break;
        }
        case 'LOWER': {
          message = `${fieldName} should be lower than ${error.field}`;
          break;
        }
        case 'HIGHER': {
          message = `${fieldName} should be higher than ${error.field}`;
          break;
        }
        default: {
          message = `Comparison failed with field ${error.field}`;
          break;
        }
      }
      return message;
    }

    // White space
    if (errors.whiteSpace) {
      return `${fieldName} contains only white spaces.`;
    }

    // valid url
    if (errors.url) {
      return `${fieldName} is not a valid url.`;
    }
  }
}
