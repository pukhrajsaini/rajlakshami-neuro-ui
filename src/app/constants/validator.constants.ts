import { Validators, ValidatorFn, AbstractControl, FormGroup, FormArray } from '@angular/forms';


export const NAME_FIELD = {
    minLength: 2,
    maxLength: 32
};

export const EMAIL_FIELD = {
    minLength: 6,
    maxLength: 60
};

export const PASSWORD_FIELD = {
    minLength: 6,
    maxLength: 20
};

export const PRICE_FIELD = {
    minLength: 0,
    maxLength: 10
};

export const MOBILE_FIELD = {
    minLength: 7,
    maxLength: 15
};



export const CustomValidators = {
    whiteSpace(control: AbstractControl) {
        if (typeof control.value !== 'number') {
            const value = control.value || '';
            const isWhitespace = (value.trim().length !== value.length) && (value.trim().length === 0);
            return !isWhitespace ? null : { whiteSpace: true };
        }
        return null;
    },
    emailPattern(control: AbstractControl) {
        const value = control && control.value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // console.log(value, regex.test(value));
        if (value && typeof value === 'string' && !regex.test(value)) {
            return {
                email: true
            };
        }
        return null;
    },
    match(field: string, parentControl?: FormGroup | FormArray): ValidatorFn {
        return this.compare(field, 'MATCH', parentControl)((a, b) => a === b);
    },
    lowerThan(field: string, parentControl?: FormGroup | FormArray): ValidatorFn {
        return this.compare(field, 'LOWER', parentControl)((a, b) => a < b);
    },
    higherThan(field: string, parentControl?: FormGroup | FormArray): ValidatorFn {
        return this.compare(field, 'HIGHER', parentControl)((a, b) => a > b);
    },
    compare(field: string, type: 'MATCH' | 'LOWER' | 'HIGHER', parentControl?: FormGroup | FormArray) {
        return (fn: (a: any, b: any) => boolean) => {
            return (control: AbstractControl) => {
                const parent = parentControl ? parentControl : control.parent;
                if (parent) {
                    const matchControl: AbstractControl = parent.controls[field];
                    if (!matchControl) {
                        throw(new Error(`Match Control [${field}] not found on parent control.`));
                    }
                    // console.log(fn(control.value, matchControl.value));
                    if (!fn(control.value, matchControl.value)) {
                        return {
                            compare: {
                                field,
                                type
                            }
                        };
                    }
                }
            };
        };
    },
    url(control: AbstractControl) {
        const regForUrl = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (!regForUrl.test(control.value)) {
            return { url: true };
        }
        return null;
    },
};

export const FieldValidators = {
    name: [
        CustomValidators.whiteSpace,
        Validators.minLength(NAME_FIELD.minLength),
        Validators.maxLength(NAME_FIELD.maxLength)
    ],
    email: [
        Validators.email,
        Validators.minLength(EMAIL_FIELD.minLength),
        Validators.maxLength(EMAIL_FIELD.maxLength)
    ],
    password: [
        CustomValidators.whiteSpace,
        Validators.minLength(PASSWORD_FIELD.minLength),
        Validators.maxLength(PASSWORD_FIELD.maxLength)
    ],
};
