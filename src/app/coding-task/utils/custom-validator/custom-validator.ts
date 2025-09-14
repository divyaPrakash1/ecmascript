import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {



    static onlyAlphabet() {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!!value && !/^[A-Za-z]+$/.test(value)) {
                return { onlyAlphabet: true }
            }
            return null
        }
    }

    static ageBetween(min: number, max: number) {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!!value && !(min > value || value < max)) {
                return { ageBetween: true }
            }
            return null
        }
    }

    static onlyNumbersAllowed() {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (isNaN(value)) {
                return { onlyNumbersAllowed: true }
            }
            return null
        }
    }

    static numberShouldBeGivenDigits(digits: number) {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!isNaN(value) && value.length !== digits) {
                return { numberShouldBeGivenDigits: true }
            }
            return null
        }
    }

}